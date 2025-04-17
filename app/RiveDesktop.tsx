"use client";
import { RiveFile } from "@rive-app/react-webgl2";
import RiveDesktopSection from "./RiveSection";
import Overlay from "./Overlay";

type RiveMobileProps = {
  riveFile: RiveFile;
};

export default function RiveDesktop({ riveFile }: RiveMobileProps) {
  return (
    <div
      style={{
        height: "600%",
        aspectRatio: 1920 / (1080 * 6),
        position: "relative",
        flexShrink: 0,
      }}
    >
      <RiveDesktopSection section="HeaderSectionWeb" riveFile={riveFile} />
      <RiveDesktopSection section="CuandoSectionWeb" riveFile={riveFile} />
      <RiveDesktopSection section="DCodeSectionWeb" riveFile={riveFile} />
      <RiveDesktopSection section="DondeSectionWeb" riveFile={riveFile} />
      <RiveDesktopSection section="CnfirmarAsistSectionWeb" riveFile={riveFile} />
      <RiveDesktopSection section="AliasSectionWebBlack" riveFile={riveFile} />
      <Overlay />
    </div>
  );
}
