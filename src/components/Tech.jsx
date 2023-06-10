import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Texture } from 'three'
import Cube from './Cube'

function Tech() {
    return (
        <div className='tech'
            style={
                {
                    height: '100vh',
                    width: '100%',
                    scrollSnapAlign: 'center',
                    zIndex: '1000'
                }
            }
        >
            <Canvas>
                <OrbitControls
                    enableZoom={true}
                    autoRotate={true}
                />
                <ambientLight
                    intensity={1}
                />
                <directionalLight
                    position={[3, 2, 1]}
                />
                <Cube />
            </Canvas>
        </div>
    )
}

export default Tech