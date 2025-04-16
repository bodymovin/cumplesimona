"use client";
import { Fit, Layout, useRive } from "@rive-app/react-webgl2";
import { useEffect } from "react";

type RiveMobileSectionProps = {
  section: string;
}

export default function RiveMobileSection({section}: RiveMobileSectionProps) {
  const { rive, RiveComponent } = useRive({
    src: './invitacion.riv',
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
  return (
    <div
      style={{
        width: "100%",
        height: "20%",
      }}
    >
      <RiveComponent />
    </div>
  );
}
