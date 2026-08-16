import { useEffect, useRef } from 'react'
import { Mesh, Program, Renderer, Triangle } from 'ogl'

const vertexShader = `
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform float uScale;
uniform float uRingCount;
uniform float uSpokeCount;
uniform vec3 uColor;

#define TAU 6.28318530718

void main() {
  vec2 position = gl_FragCoord.xy / uResolution.xy;
  position = position * 2.0 - 1.0;
  position.x *= uResolution.x / uResolution.y;
  position *= uScale;

  float distance = length(position);
  float angle = atan(position.y, position.x);
  float ringDistance = abs(fract(distance * uRingCount - uTime) - 0.5);
  float rings = 1.0 - smoothstep(0.0, 0.055, ringDistance);
  float spokeAngle = abs(
    fract(angle * uSpokeCount / TAU + 0.5) - 0.5
  ) * TAU / uSpokeCount;
  float spokes = (1.0 - smoothstep(0.0, 0.012, spokeAngle * distance))
    * smoothstep(0.0, 0.1, distance);
  float sweep = pow(
    max(0.5 * sin(angle + uTime * 1.4) + 0.5, 0.0),
    3.0
  );
  float fade = smoothstep(1.05, 0.85, distance)
    * pow(max(1.0 - distance, 0.0), 1.7);
  float intensity = max((rings + spokes + sweep) * fade, 0.0);

  gl_FragColor = vec4(uColor * intensity, clamp(intensity, 0.0, 1.0));
}
`

const hexToRgb = (hexColor) => {
  const value = hexColor.replace('#', '')
  return [
    Number.parseInt(value.slice(0, 2), 16) / 255,
    Number.parseInt(value.slice(2, 4), 16) / 255,
    Number.parseInt(value.slice(4, 6), 16) / 255,
  ]
}

const Radar = ({
  color = '#2563eb',
  scale = 0.75,
  ringCount = 9,
  spokeCount = 12,
  speed = 0.35,
  isAnimated = true,
  className = '',
}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const renderer = new Renderer({
      alpha: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    container.appendChild(gl.canvas)

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1, 1, 1] },
        uScale: { value: scale },
        uRingCount: { value: ringCount },
        uSpokeCount: { value: spokeCount },
        uColor: { value: hexToRgb(color) },
      },
    })
    const mesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program,
    })

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight)
      program.uniforms.uResolution.value = [
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height,
      ]
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    resize()

    let animationFrameId
    const render = (time) => {
      if (isAnimated) program.uniforms.uTime.value = time * speed * 0.001
      renderer.render({ scene: mesh })

      if (isAnimated) animationFrameId = requestAnimationFrame(render)
    }
    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      gl.canvas.remove()
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [color, isAnimated, ringCount, scale, speed, spokeCount])

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full [&_canvas]:block ${className}`}
    />
  )
}

export default Radar
