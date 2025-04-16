"use client";
import { Fit, Layout, RiveFile, useRive } from "@rive-app/react-webgl2";
import { useEffect } from "react";

export type RiveElementProps = {
  section: string;
  riveFile?: RiveFile;
};

export default function RiveElement({ section, riveFile }: RiveElementProps) {
  const { rive, RiveComponent } = useRive({
    riveFile: riveFile,
    autoplay: true,
    artboard: section,
    stateMachines: ["State Machine 1"],
    automaticallyHandleEvents: false,
    isTouchScrollEnabled: true,

    layout: new Layout({
      fit: Fit.Cover,
      layoutScaleFactor: 1,
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
