/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/Compo/KarakuriBox.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-32.22, 2.36, 9.45]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.03, 1.03, 0.04]}
      >
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials["Copper.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.box}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials.Text}
        />
        <mesh
          geometry={nodes.Cylinder001_3.geometry}
          material={materials["Material.070"]}
        />
        <mesh
          geometry={nodes.Cylinder001_4.geometry}
          material={materials["Metal.017"]}
        />
        <mesh
          geometry={nodes.Cylinder001_5.geometry}
          material={materials["Roller.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_6.geometry}
          material={materials["Black.024"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Model/Compo/KarakuriBox.glb");
