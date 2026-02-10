// app/components/AmbientBackground.jsx
"use client";

import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Deep base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Slow drifting orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.03] bg-white"
        style={{
          left: `${mousePos.x * 0.3}%`,
          top: `${mousePos.y * 0.3}%`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.5s ease-out, top 0.5s ease-out",
        }}
      />

      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.02] bg-[#00ff88]"
        style={{
          right: `${100 - mousePos.x * 0.2}%`,
          bottom: `${100 - mousePos.y * 0.2}%`,
          transform: "translate(50%, 50%)",
          transition: "right 0.7s ease-out, bottom 0.7s ease-out",
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, #050505 80%)",
        }}
      />
    </div>
  );
}
