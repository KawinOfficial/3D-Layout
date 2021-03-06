/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/Compo/Fan.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[175.19, 2.28, -49.22]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0}
      >
        <mesh
          geometry={
            nodes["Line_Pipekit_3D_-_Assem_chiller-1_แบบเครื่อ"].geometry
          }
          material={materials["ControlBox.007"]}
        />
        <mesh
          geometry={
            nodes["Line_Pipekit_3D_-_Assem_chiller-1_แบบเครื่อ_1"].geometry
          }
          material={materials["Button.007"]}
        />
        <mesh
          geometry={
            nodes["Line_Pipekit_3D_-_Assem_chiller-1_แบบเครื่อ_2"].geometry
          }
          material={materials["ButtonEmer.008"]}
        />
        <mesh
          geometry={
            nodes["Line_Pipekit_3D_-_Assem_chiller-1_แบบเครื่อ_3"].geometry
          }
          material={materials["Metal.012"]}
        />
        <mesh
          geometry={
            nodes["Line_Pipekit_3D_-_Assem_chiller-1_แบบเครื่อ_4"].geometry
          }
          material={materials["Black.013"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Model/Compo/Fan.glb");
