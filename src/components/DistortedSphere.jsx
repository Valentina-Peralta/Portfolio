import React, { useRef } from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { gsap } from 'gsap';
import { useFrame } from '@react-three/fiber';
import { Camera } from 'three';

/* Color {isColor: true, r: 0.03820437158923601, g: 0.001214107934117647, b: 0.024157632443547246}
 */
function DistortedSphere() {
    const sphereMaterialRef = useRef();
    useFrame(state => {
        sphereMaterialRef.current.distort = Math.sin(state.clock.elapsedTime) * 0.7
        sphereMaterialRef.current.color.b = Math.sin(state.clock.elapsedTime) * 0.02 + 0.024157632443547246


    })

    return (
        <Sphere
            args={[1, 100, 100]} scale={2} >
            <MeshDistortMaterial
                ref={sphereMaterialRef}
                roughness={0.5}
                color='#37042b'
                attach='material'
                distort={0.5}
                speed={1}
            />
        </Sphere>)
}

export default DistortedSphere