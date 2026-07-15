"use client";

import React from 'react';

const ShinyText = ({ text, disabled = false, speed = 5, className = '', ...props }) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 70%)',
        backgroundSize: '200% auto',
        color: 'rgba(255, 255, 255, 0.65)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
        animationDuration: animationDuration,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
      }}
      {...props}
    >
      {text}
    </span>
  );
};

export default ShinyText;
