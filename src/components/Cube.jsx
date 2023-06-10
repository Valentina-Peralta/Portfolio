import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Texture } from 'three'

function Cube() {
    const textRef = useRef()
    useFrame(state => {
        textRef.current.position.x = Math.sin(state.clock.elapsedTime)
    })
    return (
        <mesh>
            <boxGeometry
                args={[.01, 2, 2]}
            />
            <meshStandardMaterial
            >
                <RenderTexture attach='map'>
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 2]} />
                    <color attach='background'
                        args={['pink']}
                    />
                    <Text
                        ref={textRef}
                        fontSize={1} color='black'>
                        Vale
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>)
}

export default Cube