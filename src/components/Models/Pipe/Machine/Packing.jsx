/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/Packing.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-79.62, 2.58, 62.21]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.0026, 0.0026, 0.0026]}
      >
        <mesh
          geometry={nodes.Packing049.geometry}
          material={materials["TableLeg.002"]}
        />
        <mesh
          geometry={nodes.Packing049_1.geometry}
          material={materials["Wood.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Model/Packing.glb");
