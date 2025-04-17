"use client";
import { RiveFile } from "@rive-app/react-webgl2";
import RiveMobileSection from "./RiveSection";
import Overlay from "./Overlay";

type RiveMobileProps = {
  riveFile: RiveFile;
};

export default function RiveMobile({ riveFile }: RiveMobileProps) {
  return (
    <div
      style={{
        height: "600%",
        aspectRatio: 520 / (1080 * 6),
        position: "relative",
        flexShrink: 0,
      }}
    >
      <RiveMobileSection section="HeaderPhoneLayout" riveFile={riveFile} />
      <RiveMobileSection section="CuandoSectionLayout" riveFile={riveFile} />
      <RiveMobileSection section="DCodeSectionLayout" riveFile={riveFile} />
      <RiveMobileSection section="DondeSectionLayout" riveFile={riveFile} />
      <RiveMobileSection section="ConfirmarPhoneLayout" riveFile={riveFile} />
      <RiveMobileSection section="AliasSectionLayout" riveFile={riveFile} />
      <Overlay />
    </div>
  );
}
