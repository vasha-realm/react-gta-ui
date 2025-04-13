'use client'
import { useState } from "react";
import Image from "next/image";
import { Container, NumberLed, SvgPainter } from "@/vasha-react-kit/src/components";
import { VehiclePanel } from "./components";

export default function Home() {
  setInterval(() => {
    setSpeed(Math.floor(Math.random() * 1000000000))
  }, 1000)
  const [speed, setSpeed] = useState(1234567890);
  return (
    <Container classNames="relative">
      <Image
        src="/hud.jpg"
        alt="hud"
        fill
        className="object-cover -z-10"
        priority
      />

      <VehiclePanel
        classNames="
          absolute w-[16rem] aspect-square
          bottom-[2rem] right-[2rem]
        "
      />

      {/* <NumberLed num={speed} /> */}

      <SvgPainter />
    </Container>
  );
}
