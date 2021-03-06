/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/Compo/FutureProject.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Compart.geometry}
        material={nodes.Compart.material}
        position={[41.75, 2.98, 66.19]}
        scale={[24.61, 2.55, 21.26]}
      />
      <mesh
        geometry={nodes.PipeKit.geometry}
        material={nodes.PipeKit.material}
        position={[129.34, 2.98, -15.27]}
        scale={[42.29, 2.55, 76.11]}
      />
    </group>
  );
}

useGLTF.preload("/Model/Compo/FutureProject.glb");
