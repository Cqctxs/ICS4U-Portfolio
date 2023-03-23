import {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
    const computer = useGLTF('./globe/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={100} groundColor="black"/>
            <pointLight intensity={5}/>
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
            />
            <primitive
                object={computer.scene}
                scale={1.6}
                position={[0, -1, 0]}
                rotation={[-0.234, 0, 0]}
            />
        </mesh>
    )
}

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{
                fov: 15,
                position: [20, 3, 5],
            }}
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