import { useEffect, useRef } from 'react'
import { Color, Mesh, Program, Renderer, Triangle } from 'ogl'

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform float uVertical;
uniform vec2 uMouse;

const int LINE_COUNT = 40;
const float LINE_WIDTH = 7.0;
const float LINE_BLUR = 10.0;

float perlin2D(vec2 point) {
  vec2 cell = floor(point);
  vec4 relativePosition = point.xyxy - vec4(cell, cell + 1.0);
  vec4 hashPoint = vec4(cell.xy, cell.xy + 1.0);
  hashPoint = hashPoint - floor(hashPoint * (1.0 / 71.0)) * 71.0;
  hashPoint += vec2(26.0, 161.0).xyxy;
  hashPoint *= hashPoint;
  hashPoint = hashPoint.xzxz * hashPoint.yyww;

  vec4 gradientX = fract(hashPoint * (1.0 / 951.135664)) - 0.49999;
  vec4 gradientY = fract(hashPoint * (1.0 / 642.949883)) - 0.49999;
  vec4 gradients = inversesqrt(gradientX * gradientX + gradientY * gradientY)
    * (gradientX * relativePosition.xzxz + gradientY * relativePosition.yyww);
  gradients *= 1.4142135623730950;

  vec2 blend = relativePosition.xy * relativePosition.xy * relativePosition.xy
    * (relativePosition.xy * (relativePosition.xy * 6.0 - 15.0) + 10.0);
  vec4 blendWeights = vec4(blend, vec2(1.0 - blend));

  return dot(gradients, blendWeights.zxzx * blendWeights.wwyy);
}

float pixel(float count, vec2 resolution) {
  return (1.0 / max(resolution.x, resolution.y)) * count;
}

float line(
  vec2 position,
  float width,
  float percentage,
  vec2 mouse,
  float time,
  float amplitude,
  float distance
) {
  float splitPoint = 0.1 + percentage * 0.4;
  float amplitudeProgress = smoothstep(splitPoint, 0.7, position.x);
  float finalAmplitude = amplitudeProgress * 0.5 * amplitude
    * (1.0 + (mouse.y - 0.5) * 0.2);
  float scaledTime = time / 10.0 + (mouse.x - 0.5);
  float blur = smoothstep(splitPoint, splitPoint + 0.05, position.x) * percentage;

  float noise = mix(
    perlin2D(vec2(scaledTime, position.x + percentage) * 2.5),
    perlin2D(vec2(scaledTime, position.x + scaledTime) * 3.5) / 1.5,
    position.x * 0.3
  );

  float y = 0.5 + (percentage - 0.5) * distance
    + noise / 2.0 * finalAmplitude;
  float lineStart = smoothstep(
    y + width / 2.0 + LINE_BLUR * pixel(1.0, iResolution.xy) * blur,
    y,
    position.y
  );
  float lineEnd = smoothstep(
    y,
    y - width / 2.0 - LINE_BLUR * pixel(1.0, iResolution.xy) * blur,
    position.y
  );

  return clamp(
    (lineStart - lineEnd) * (1.0 - smoothstep(0.0, 1.0, pow(percentage, 0.3))),
    0.0,
    1.0
  );
}

void main() {
  vec2 position = gl_FragCoord.xy / iResolution.xy;
  position = mix(position, position.yx, uVertical);
  float lineStrength = 1.0;

  for (int index = 0; index < LINE_COUNT; index++) {
    float percentage = float(index) / float(LINE_COUNT);
    lineStrength *= 1.0 - line(
      position,
      LINE_WIDTH * pixel(1.0, iResolution.xy) * (1.0 - percentage),
      percentage,
      uMouse,
      iTime,
      uAmplitude,
      uDistance
    );
  }

  float colorStrength = 1.0 - lineStrength;
  gl_FragColor = vec4(uColor * colorStrength, colorStrength);
}
`

const Threads = ({
  color = [1, 1, 1],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  verticalOnMobile = false,
  isAnimated = true,
  className = '',
}) => {
  const containerRef = useRef(null)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const renderer = new Renderer({ alpha: true })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    container.appendChild(gl.canvas)

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Color(1, 1, 1) },
        uColor: { value: new Color(...color) },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uVertical: { value: 0 },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    })
    const mesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program,
    })

    const resize = () => {
      const { clientWidth, clientHeight } = container
      renderer.dpr = Math.min(window.devicePixelRatio, 2)
      renderer.setSize(clientWidth, clientHeight)
      program.uniforms.iResolution.value.set(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height,
      )
      program.uniforms.uVertical.value =
        verticalOnMobile && clientWidth < 640 ? 1 : 0
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    resize()

    const mouse = [0.5, 0.5]
    const targetMouse = [0.5, 0.5]

    const handleMouseMove = (event) => {
      const bounds = container.getBoundingClientRect()
      targetMouse[0] = (event.clientX - bounds.left) / bounds.width
      targetMouse[1] = 1 - (event.clientY - bounds.top) / bounds.height
    }

    if (enableMouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    const render = (time) => {
      if (enableMouseInteraction) {
        mouse[0] += (targetMouse[0] - mouse[0]) * 0.05
        mouse[1] += (targetMouse[1] - mouse[1]) * 0.05
        program.uniforms.uMouse.value.set(mouse)
      }

      if (isAnimated) program.uniforms.iTime.value = time * 0.001
      renderer.render({ scene: mesh })

      if (isAnimated || enableMouseInteraction) {
        animationFrameRef.current = requestAnimationFrame(render)
      }
    }

    animationFrameRef.current = requestAnimationFrame(render)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      resizeObserver.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
      gl.canvas.remove()
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [
    amplitude,
    color,
    distance,
    enableMouseInteraction,
    isAnimated,
    verticalOnMobile,
  ])

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full [&_canvas]:block ${className}`}
    />
  )
}

export default Threads
