import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
    const globe = useGLTF('./globe/scene.gltf')

    return (
        <mesh>
            <primitive
                object={globe.scene}
                scale={1.8}
                position={[0, -0.75, 0]}
                rotation={[-0.234, 0, 0]}
            />
        </mesh>
    )
}

const GlobeCanvas = () => {
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

export default GlobeCanvas;