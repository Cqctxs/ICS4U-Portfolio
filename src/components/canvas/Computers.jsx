import {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
    const computer = useGLTF('./globe/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={100} groundColor="black"/>
            <primitive
                object={computer.scene}
                scale={1.8}
                position={[0, -0.5, 0]}
                rotation={[-0.234, 0, 0]}
            />
        </mesh>
    )
}

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers/>
            </Suspense>
            <Preload all/>
        </Canvas>
    );
}

export default ComputersCanvas;