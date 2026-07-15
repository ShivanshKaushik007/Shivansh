"use client";

import React, { useRef, useState } from 'react';

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 255, 153, 0.12)",
  borderColor = "rgba(0, 255, 153, 0.25)",
  ...props
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#1e1e24] ${className}`}
      {...props}
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          opacity,
        }}
      />
      {/* Border radial glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl border transition duration-300"
        style={{
          borderColor: 'transparent',
          backgroundImage: `radial-gradient(150px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 80%)`,
          opacity,
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
