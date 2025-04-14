"use client"
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

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isPortrait = width < height;
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <main style={{ width: "100%", height: "100%" }}>
        {isPortrait ? <RiveMobile /> : <RiveDesktop />}
      </main>
    </div>
  );
}
