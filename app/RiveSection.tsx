"use client";
import { useEffect, useRef, useState } from "react";
import RiveElement, { RiveElementProps } from "./RiveElement";

export default function RiveSection({
  section,
  riveFile,
}: RiveElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px", // no margin
        threshold: 0.01, // 1% of target visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={targetRef}
      style={{
        width: "100%",
        height: "16.6%",
      }}
    >
      {isVisible ? (
        <RiveElement section={section} riveFile={riveFile} />
      ) : (
        <div />
      )}
    </div>
  );
}
