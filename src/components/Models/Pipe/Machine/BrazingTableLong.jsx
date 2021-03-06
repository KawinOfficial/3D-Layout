/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/BrazingTableLong.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-172.78, 3.17, 49.85]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.0033, 0.003, 0.003]}
      >
        <mesh
          geometry={nodes.Brazing_Type161.geometry}
          material={materials["TableLeg.001"]}
        />
        <mesh
          geometry={nodes.Brazing_Type161_1.geometry}
          material={materials["Metal.013"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Model/BrazingTableLong.glb");
