/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/Compo/KarakuriV2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-47.04, 2.2, -25.11]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.06, 0.07, 0.1]}
      >
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Metal.008"]}
        />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Roller}
        />
        <mesh
          geometry={nodes.Cylinder_3.geometry}
          material={materials["Black.014"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Model/Compo/KarakuriV2.glb");
