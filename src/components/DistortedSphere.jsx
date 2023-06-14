import React, { useRef } from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

/* Color {isColor: true, r: 0.2663556047920505, g: 0.3967552307153359, b: 0.55201140150344}
 */
function DistortedSphere({ radius }) {
    const sphereMaterialRef = useRef();
    useFrame(state => {
        sphereMaterialRef.current.distort = Math.sin(state.clock.elapsedTime) * 0.7
        sphereMaterialRef.current.color.b = Math.sin(state.clock.elapsedTime) * 0.2 + 0.3
        // sphereMaterialRef.current.color.g = Math.sin(state.clock.elapsedTime) * 0.1 + 0.2
        //sphereMaterialRef.current.color.r = Math.sin(state.clock.elapsedTime) * 0.1 + 0.4


    })

    return (
        <Sphere
            args={[Number(radius), 100, 100]} scale={2} >
            <MeshDistortMaterial

                ref={sphereMaterialRef}
                roughness={0.1}
                color='#457b9d'
                attach='material'
                distort={0.5}
                speed={1}
                metalness={0.4} />

        </Sphere>)
}

export default DistortedSphere