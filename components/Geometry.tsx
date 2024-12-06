'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TrackballControls } from '@react-three/drei';
import { Mesh } from 'three';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

//@ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Duck() {
    const fileUrl = '/duck.glb';
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        mesh.current.rotation.y += 0.005;
    });

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export default function Geometry(props: any) {
    return (
        <div className={props.className}>
            <Canvas
                camera={{ position: [0, 0, 4], zoom: 1.2, fov: 45 }}
                className={props.className}
            >
                <TrackballControls
                    target={[0, 0.5, 0]}
                    noPan={true}
                    noZoom={true}
                    noRotate={false}
                    rotateSpeed={2.5}
                />
                <ambientLight intensity={3} />
                <Duck />
                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={5} height={300} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
