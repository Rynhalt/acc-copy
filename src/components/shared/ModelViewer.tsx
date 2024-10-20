"use client";
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Model = () => {
  const gltf = useLoader(GLTFLoader, 'https://cdn.builder.io/o/assets%2F105f2061e4de4572989bc0746b5c0807%2F2450094cab3f4b1f95e013958d663249?alt=media&token=aba693b7-097a-41e9-be59-2e860f2af4f7&apiKey=105f2061e4de4572989bc0746b5c0807');
  const modelRef = useRef<THREE.Group>();
  const { camera } = useThree();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0040;
    }
  });

  React.useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      modelRef.current.position.sub(center);

      modelRef.current.rotation.y =  - Math.PI / 6; // 45 degrees in radians

      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      camera.position.set(0, maxDim / 2, maxDim * 1.1);
      camera.lookAt(0, 0, 0);
    }
  }, [camera]);

  return <primitive object={gltf.scene} ref={modelRef} />;
};

const ModelViewer: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[500, 500, 500]} intensity={2} castShadow />
        <pointLight position={[0, 0, 100]} intensity={15} distance={100} castShadow />
        <Model />
      </Canvas>
    </div>
  );
};

export default ModelViewer;