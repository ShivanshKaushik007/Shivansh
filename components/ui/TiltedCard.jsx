"use client";

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltedCard({
  children,
  className = "",
  tiltMaxAngleX = 15,
  tiltMaxAngleY = 15,
  perspective = 1000,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [0, 1], [tiltMaxAngleX, -tiltMaxAngleX]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-tiltMaxAngleY, tiltMaxAngleY]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective,
      }}
      className={`relative cursor-pointer ${className}`}
      {...props}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
