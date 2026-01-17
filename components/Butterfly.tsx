import React from 'react';

/**
 * Butterfly Component / Componente Mariposa
 * SVG Icon representing the brand logo.
 * Icono SVG que representa el logo de la marca.
 */
export const Butterfly: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${className} svgIcon`}
    fill="none"
    stroke="currentColor"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M50 25 V75" strokeWidth="4" className="opacity-50" />
    <path d="M50 35 C 70 15, 90 10, 90 35 C 90 55, 60 60, 50 55" />
    <path d="M50 35 C 30 15, 10 10, 10 35 C 10 55, 40 60, 50 55" />
    <path d="M50 55 C 60 65, 80 70, 80 85 C 80 95, 60 85, 50 75" />
    <path d="M50 55 C 40 65, 20 70, 20 85 C 20 95, 40 85, 50 75" />
    <circle cx="50" cy="25" r="3" fill="currentColor" stroke="none" />
  </svg>
);