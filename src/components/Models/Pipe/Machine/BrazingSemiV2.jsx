/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/BrazingSemiV2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-100.4, 3.02, 49.17]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.003}
      >
        <mesh
          geometry={nodes.Brazing_Type010.geometry}
          material={materials["Door.003"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_1.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Brazing_Type010_2.geometry}
          material={materials.table}
        />
        <mesh
          geometry={nodes.Brazing_Type010_3.geometry}
          material={materials["Metal.014"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_4.geometry}
          material={materials["Black.015"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_5.geometry}
          material={materials.Motor}
        />
        <mesh
          geometry={nodes.Brazing_Type010_6.geometry}
          material={materials.Welding}
        />
        <mesh
          geometry={nodes.Brazing_Type010_7.geometry}
          material={materials["Red.004"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_8.geometry}
          material={materials["aluminium.005"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_9.geometry}
          material={materials["black.006"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_10.geometry}
          material={materials["grey_base.005"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_11.geometry}
          material={materials["grey.005"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_12.geometry}
          material={materials["copper.005"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_13.geometry}
          material={materials["ivory_gripper.005"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_14.geometry}
          material={materials["ivory.005"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_15.geometry}
          material={materials["ivory_arm.006"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_16.geometry}
          material={materials["grey_rotation.005"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_17.geometry}
          material={materials["Main.004"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_18.geometry}
          material={materials["table.001"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_19.geometry}
          material={materials["Black.022"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_20.geometry}
          material={materials["Metal.015"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_21.geometry}
          material={materials["Door.004"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_22.geometry}
          material={materials["Motor.001"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_23.geometry}
          material={materials["Welding.001"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_24.geometry}
          material={materials["Red.005"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_25.geometry}
          material={materials["Metal.016"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_26.geometry}
          material={materials["Black.023"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_27.geometry}
          material={materials["Pipe.013"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_28.geometry}
          material={materials["White.007"]}
        />
        <mesh
          geometry={nodes.Brazing_Type010_29.geometry}
          material={materials["Blue.009"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Model/BrazingSemiV2.glb");
