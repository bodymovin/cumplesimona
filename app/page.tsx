"use client"
import { useRiveFile } from "@rive-app/react-webgl2";
import RiveDesktop from "./RiveDesktop";
import RiveMobile from "./RiveMobile";
import { useEffect, useState } from "react";

export default function Home(request: any) {
  const [width, setWidth] = useState(global?.window && window.innerWidth || 0);
  const [height, setHeight] = useState(global?.window && window.innerHeight || 0);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const {riveFile} = useRiveFile({
    src: "./invitacion.riv",
  })

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  if(riveFile == null) {
    return <div>loading...</div>
  }
  const isPortrait = width < height;
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <main style={{ width: "100%", height: "100%" }}>
        {isPortrait ? <RiveMobile riveFile={riveFile}/> : <RiveDesktop />}
      </main>
    </div>
  );
}
