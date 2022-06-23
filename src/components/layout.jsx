import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Loader, Stars, Text } from "@react-three/drei";
import * as THREE from "three";
import axios from "axios";

import {
  FutureProject,
  Office,
  Floor,
  Wall,
  Karakuri,
  PalletJack,
  Warehouse,
  StoreBox,
  StoreCopper,
  BrazingTable,
  BrazingTableLong,
  BrazingAuto,
  BrazingSemi,
  Packing,
  Forming0304,
  Forming05,
  Forming06,
  Forming10,
  Bending07,
  Bending08,
  Bending09,
  Bending10,
  Cutting,
  LampLeg01,
  LampLeg0304,
  LampLeg05,
  LampLeg06,
  LampLeg07,
  LampLeg07Yellow,
  LampLeg08,
  LampLeg09,
  LampLeg10,
  LampLeg11,
  Lamp,
  OuterStore,
} from "./Models";

import {
  brazingLamp,
  packingLamp,
  formingLamp,
  bendingLamp,
  cuttingLamp,
} from "./Models/lampPos";

function Word({ size, children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    // font: "/src/Page/Inter-Bold.woff",
    font: "https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff",
    fontSize: size,
    letterSpacing: -0.02,
    lineHeight: 1.5,
    "material-toneMapped": false,

    // lerp can't read
    outlineColor: "#000",
    outlineWidth: 0.5,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);
    // console.log(camera.position);
    // ref.current.material.color.lerp(color.set(hovered ? "#f00" : "White"), 0.1);
  });

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

const PipeLampLayout = ({ machine }) => {
  const handleColor = (areaNo, machineNo) => {
    const machineInfo = machine.find(
      (info) => info.areaNo === areaNo && info.machineNo === machineNo
    );

    if (!machineInfo || !areaNo) return "#000";

    const { status } = machineInfo;
    return status === "Online"
      ? "#00bd2c"
      : status === "Stop"
      ? "#f00"
      : status === "Alarm"
      ? "#ff0"
      : "#ccc";
  };

  return (
    <>
      {/* LampLeg */}
      <LampLeg01 />
      <LampLeg0304 />
      <LampLeg05 />
      <LampLeg06 />
      <LampLeg07 />
      <LampLeg07Yellow />
      <LampLeg08 />
      <LampLeg09 />
      <LampLeg09 />
      <LampLeg10 />
      <LampLeg11 />

      {/* Lamp */}
      {brazingLamp.map((info, i) => (
        <Lamp
          key={i}
          {...info}
          color={handleColor(info.areaNo, info.machineNo)}
        />
      ))}
      {packingLamp.map((info, i) => (
        <Lamp
          key={i}
          {...info}
          color={handleColor(info.areaNo, info.machineNo)}
        />
      ))}
      {formingLamp.map((info, i) => (
        <Lamp
          key={i}
          {...info}
          color={handleColor(info.areaNo, info.machineNo)}
        />
      ))}
      {bendingLamp.map((info, i) => (
        <Lamp
          key={i}
          {...info}
          color={handleColor(info.areaNo, info.machineNo)}
        />
      ))}
      {cuttingLamp.map((info, i) => (
        <Lamp
          key={i}
          {...info}
          color={handleColor(info.areaNo, info.machineNo)}
        />
      ))}
    </>
  );
};

const CompoLayout = () => {
  return (
    <>
      <Floor />
      <Wall />
      <Office />
      <Karakuri />
      <PalletJack />
      <Warehouse />
      <StoreBox />
      <StoreCopper />
      <FutureProject />
      <OuterStore />
    </>
  );
};

const PipeLayout = () => {
  return (
    <>
      {/* Brazing */}
      <BrazingTable />
      <BrazingTableLong />
      <BrazingAuto />
      <BrazingSemi />

      {/* Packing */}
      <Packing />

      {/* Forming */}
      <Forming0304 />
      <Forming05 />
      <Forming06 />
      <Forming10 />

      {/* Bending */}
      <Bending07 />
      <Bending08 />
      <Bending09 />
      <Bending10 />

      {/* Cutting */}
      <Cutting />
    </>
  );
};

const CustomMesh = ({ machine }) => {
  const group = useRef();
  useFrame(() => (group.current.rotation.y -= 0.001));

  return (
    <>
      <group ref={group}>
        <group scale={1} position={[60, 0, -10]} dispose={null}>
          <directionalLight position={[-100, 200, 150]} />
          <ambientLight intensity={0.3} />
          <CompoLayout />
          <PipeLayout />
          {machine && <PipeLampLayout machine={machine} />}
        </group>
      </group>
    </>
  );
};

const CustomText = () => {
  const group = useRef();
  useFrame(() => (group.current.rotation.y -= 0.001));

  return (
    <>
      <group ref={group}>
        <Word position={[38, 22, 68]} children="Office" size={4} />
        <Word position={[100, 12, 60]} children="Compart" size={4} />
        <Word position={[185, 24, 68]} children="Warehouse" size={4} />
        <Word position={[160, 12, -10]} children="Pipe kit" size={4} />
        <Word position={[15, 10, -70]} children="Cutting Process" size={3} />
        <Word position={[-95, 10, -50]} children="Bending Process" size={3} />
        <Word position={[-95, 10, 0]} children="Forming Process" size={3} />
        <Word position={[-95, 16, 50]} children="Brazing Process" size={3} />
        <Word position={[-20, 16, 50]} children="Packing Process" size={3} />
      </group>
    </>
  );
};

export default function Layout({ chkBox }) {
  const [machine, setMachine] = useState();

  const getAllMachineInfo = () => {
    axios.get("/b12-api-web/all-machine").then(({ data }) => {
      setMachine(data);
    });
  };

  useEffect(() => {
    const initPage = setTimeout(() => getAllMachineInfo(), 0);
    const interval = setInterval(() => getAllMachineInfo(), 8000);

    return () => {
      clearTimeout(initPage);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Canvas
        style={{
          height: "100vh",
          background: `${chkBox[4] ? "#000" : "#fff"}`,
        }}
        camera={{ position: [120, 80, 50], fov: 40 }}
      >
        <Suspense fallback={null}>
          <CustomMesh machine={machine} />
          {chkBox[5] && <CustomText />}

          <Stars radius={120} />
          <OrbitControls
            screenSpacePanning={false}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>

      <Loader />
    </>
  );
}
