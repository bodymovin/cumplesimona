"use client";
import { Fit, Layout, useRive } from "@rive-app/react-webgl2";
import { useEffect } from "react";

export default function RiveDesktop() {
  const { rive, RiveComponent } = useRive({
    src: "./invitacion.riv",
    autoplay: true,
    artboard: "InvitacionWeb",
    stateMachines: ["State Machine 1"],
    automaticallyHandleEvents: true,
    layout: new Layout({
      fit: Fit.Cover,
    }),
  });
  useEffect(() => {
    function resize() {
      if (rive != null) {
        rive.resizeDrawingSurfaceToCanvas();
      }
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [rive]);
  return <RiveComponent />;
}
