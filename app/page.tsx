"use client"
import { useRive } from "@rive-app/react-webgl2";
import { useEffect } from "react";

export default function Home() {
  const {rive, RiveComponent} = useRive({
    src: './invitacion.riv',
    autoplay: true,
    artboard: 'InvitacionPhone',
    stateMachines: ['State Machine 1'],
  })
  useEffect(() =>{
    function resize() {
      if(rive != null) {
        rive.resizeDrawingSurfaceToCanvas();
      }
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);

    }
  }, [rive]);
  return (
    <div style={{width: "100%", height: "100%"}}>
      <main style={{width: "100%", height: "100%"}}>
        <RiveComponent/>
      </main>
    </div>
  );
}
