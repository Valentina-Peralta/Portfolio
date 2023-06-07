import React, { useEffect, useRef } from 'react'
import '../index.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from 'gsap'

const Sphere = ({ littleSphere, color, radius, lightX, lightY, lightZ, lightIntensity }) => {
    const canvasRef = useRef(null)

    useEffect(() => {


        // Scene
        const scene = new THREE.Scene()

        // Create the Sphere
        const geometry = new THREE.SphereGeometry(Number(radius), 100, 100)

        //texture
        const jupiterTexture = new THREE.TextureLoader().load('./jupiter.webp')
        console.log(jupiterTexture)

        const material = new THREE.MeshStandardMaterial({
            color: color,
            //  map: jupiterTexture,
            roughness: 0.4,
            transparent: true, // Enable transparency
        })
        const mesh = new THREE.Mesh(geometry, material)
        //rotation
        //   mesh.position.set(10, 0, -10) // Set position to X: 0, Y: 0, Z: -10

        scene.add(mesh)
        // Create the little sphere
        const geometry2 = new THREE.SphereGeometry(0.5, 100, 100)


        const material2 = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.4,
            transparent: true, // Enable transparency
        })
        const mesh2 = new THREE.Mesh(geometry2, material2)
        //rotation
        mesh2.position.set(4, 0, -4)

        littleSphere ? scene.add(mesh2) : null

        // Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        }

        // Light
        const light = new THREE.PointLight(0x9625be, Number(lightIntensity), 100)
        light.position.set(Number(lightX), Number(lightY), Number(lightZ))
        scene.add(light)

        // Camera
        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
        camera.position.z = 30
        scene.add(camera)

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true }) // Enable alpha (transparency)
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.render(scene, camera)

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.enablePan = false
        controls.enableZoom = false
        controls.autoRotate = true
        controls.autoRotateSpeed = 4

        // Resize
        const handleResize = () => {
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            renderer.setSize(sizes.width, sizes.height)
        }

        window.addEventListener('resize', handleResize)

        // Animation loop
        const animate = () => {
            controls.update()
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }

        animate()

        // Timeline magic
        const tl = gsap.timeline({
            defaults: { duration: 1 },
        })
        tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 })

        // Mouse animation color
        let mouseDown = false
        let rgb = []

        window.addEventListener('mousedown', () => {
            mouseDown = true
        })

        window.addEventListener('mouseup', () => {
            mouseDown = false
        })

        window.addEventListener('mousemove', (e) => {
            if (mouseDown) {
                rgb = [
                    Math.round((e.pageX / sizes.width) * 255),
                    Math.round((e.pageY / sizes.height) * 255),
                    150,
                ]

                const newColor = new THREE.Color(`rgb(${rgb.join(',')})`)
                gsap.to(mesh.material.color, {
                    r: newColor.r,
                    g: newColor.g,
                    b: newColor.b,
                })
            }
        })

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return <canvas ref={canvasRef} className="webgl" />
}

export default Sphere
