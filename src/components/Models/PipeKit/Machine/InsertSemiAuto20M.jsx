/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/Pipekit/InsertSemiAuto20M.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[115.86, 2.43, 25.67]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0}
      >
        <mesh
          geometry={nodes["Line_Pipekit_3D_-_เครื่อง_Inser-8"].geometry}
          material={materials.BodyBlue}
        />
        <mesh
          geometry={nodes["Line_Pipekit_3D_-_เครื่อง_Inser-8_1"].geometry}
          material={materials.BodyGreen}
        />
        <mesh
          geometry={nodes["Line_Pipekit_3D_-_เครื่อง_Inser-8_2"].geometry}
          material={materials.ButtonEmer}
        />
        <mesh
          geometry={nodes["Line_Pipekit_3D_-_เครื่อง_Inser-8_3"].geometry}
          material={materials.Monitor}
        />
        <mesh
          geometry={nodes["Line_Pipekit_3D_-_เครื่อง_Inser-8_4"].geometry}
          material={materials.White}
        />
        <mesh
          geometry={nodes["Line_Pipekit_3D_-_เครื่อง_Inser-8_5"].geometry}
          material={materials["Metal.001"]}
        />
        <mesh
          geometry={nodes["Line_Pipekit_3D_-_เครื่อง_Inser-8_6"].geometry}
          material={materials["Copper.002"]}
        />
        <mesh
          geometry={nodes["Line_Pipekit_3D_-_เครื่อง_Inser-8_7"].geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes["Line_Pipekit_3D_-_เครื่อง_Inser-8_8"].geometry}
          material={materials.ControlBox}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Model/Pipekit/InsertSemiAuto20M.glb");
