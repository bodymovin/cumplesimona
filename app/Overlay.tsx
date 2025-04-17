"use client";

export default function Overlay() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        left: 0,
        backgroundColor: "rgba(100, 0, 0, 0)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "16.6%",
          position: "absolute",
          top: "50%",
          left: 0,
          backgroundColor: "rgba(0, 100, 0, 0)",
        }}
      >
        <a
          style={{
            width: "70%",
            height: "50%",
            position: "absolute",
            top: "25%",
            left: "15%",
            pointerEvents: "auto",
            backgroundColor: "rgba(0, 0, 100, 0)",
          }}
          href="https://www.google.com/maps/place/Ble+Eventos/@-34.6077056,-58.5144777,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb7d185e919ab:0x804218ff5dd74729!8m2!3d-34.6077056!4d-58.5144777!16s%2Fg%2F11cnmqfsc9?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
          target="_blank"
        ></a>
      </div>
      <div
        style={{
          width: "100%",
          height: "16.6%",
          position: "absolute",
          top: "66.6%",
          left: 0,
          backgroundColor: "rgba(0, 100, 0, 0)",
        }}
      >
        <a
          style={{
            width: "70%",
            height: "50%",
            position: "absolute",
            top: "25%",
            left: "15%",
            pointerEvents: "auto",
            backgroundColor: "rgba(0, 0, 100, 0)",
          }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSechExL_gEHkDB9JY0LWRxVpFoc9yxct8V7rd37o4laGKJh7g/viewform?usp=dialog"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}
