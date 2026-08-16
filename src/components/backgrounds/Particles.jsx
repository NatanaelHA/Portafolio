import { useEffect, useRef } from 'react'
import { Camera, Geometry, Mesh, Program, Renderer } from 'ogl'

const vertexShader = `
attribute vec3 position;
attribute vec4 random;
attribute vec3 color;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uSpread;
uniform float uBaseSize;

varying vec4 vRandom;
varying vec3 vColor;

void main() {
  vRandom = random;
  vColor = color;

  vec3 particlePosition = position * uSpread;
  particlePosition.z *= 10.0;
  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
  modelPosition.x += sin(uTime * random.z + 6.28 * random.w)
    * mix(0.1, 1.5, random.x);
  modelPosition.y += sin(uTime * random.y + 6.28 * random.x)
    * mix(0.1, 1.5, random.w);
  modelPosition.z += sin(uTime * random.w + 6.28 * random.y)
    * mix(0.1, 1.5, random.z);

  vec4 viewPosition = viewMatrix * modelPosition;
  gl_PointSize = uBaseSize * (0.7 + random.x * 0.6)
    / length(viewPosition.xyz);
  gl_Position = projectionMatrix * viewPosition;
}
`

const fragmentShader = `
precision highp float;

uniform float uTime;
varying vec4 vRandom;
varying vec3 vColor;

void main() {
  vec2 position = gl_PointCoord.xy;
  float distance = length(position - vec2(0.5));
  float circle = smoothstep(0.5, 0.35, distance) * 0.75;
  vec3 shimmer = vColor
    + 0.12 * sin(position.yxx + uTime + vRandom.y * 6.28);

  gl_FragColor = vec4(shimmer, circle);
}
`

const hexToRgb = (hexColor) => {
  const value = Number.parseInt(hexColor.replace('#', ''), 16)
  return [
    ((value >> 16) & 255) / 255,
    ((value >> 8) & 255) / 255,
    (value & 255) / 255,
  ]
}

const Particles = ({
  count = 180,
  spread = 10,
  speed = 0.08,
  colors,
  baseSize = 90,
  isAnimated = true,
  className = '',
}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const renderer = new Renderer({ alpha: true, depth: false, dpr: 1 })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    container.appendChild(gl.canvas)

    const camera = new Camera(gl, { fov: 15 })
    camera.position.set(0, 0, 20)

    // Cada partícula recibe posición, movimiento y color una sola vez.
    const positions = new Float32Array(count * 3)
    const randomValues = new Float32Array(count * 4)
    const particleColors = new Float32Array(count * 3)

    for (let index = 0; index < count; index += 1) {
      let x
      let y
      let z
      let distance

      do {
        x = Math.random() * 2 - 1
        y = Math.random() * 2 - 1
        z = Math.random() * 2 - 1
        distance = x * x + y * y + z * z
      } while (distance > 1 || distance === 0)

      const radius = Math.cbrt(Math.random())
      positions.set([x * radius, y * radius, z * radius], index * 3)
      randomValues.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        index * 4,
      )
      particleColors.set(
        hexToRgb(colors[index % colors.length]),
        index * 3,
      )
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randomValues },
      color: { size: 3, data: particleColors },
    })
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: spread },
        uBaseSize: { value: baseSize },
      },
      transparent: true,
      depthTest: false,
    })
    const particles = new Mesh(gl, {
      mode: gl.POINTS,
      geometry,
      program,
    })

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight)
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height })
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    resize()

    let animationFrameId
    let previousTime = performance.now()
    let elapsedTime = 0

    const render = (time) => {
      if (isAnimated) {
        elapsedTime += (time - previousTime) * speed
        program.uniforms.uTime.value = elapsedTime * 0.001
        particles.rotation.y = Math.cos(elapsedTime * 0.0005) * 0.15
        particles.rotation.z += 0.01 * speed
      }
      previousTime = time
      renderer.render({ scene: particles, camera })

      if (isAnimated) animationFrameId = requestAnimationFrame(render)
    }
    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      gl.canvas.remove()
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [baseSize, colors, count, isAnimated, speed, spread])

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full [&_canvas]:block ${className}`}
    />
  )
}

export default Particles
