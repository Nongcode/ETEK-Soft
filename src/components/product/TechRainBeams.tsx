import React from "react";

interface Beam {
  left: string;
  height: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
  width?: number;
}

const BEAMS: Beam[] = [
  { left: "3%", height: 95, duration: 4.8, delay: 0.2, opacity: 0.55, color: "#38bdf8", width: 1.5 },
  { left: "9%", height: 140, duration: 5.8, delay: 1.4, opacity: 0.7, color: "#06b6d4", width: 2 },
  { left: "16%", height: 80, duration: 4.4, delay: 0.6, opacity: 0.45, color: "#60a5fa", width: 1.5 },
  { left: "23%", height: 160, duration: 6.5, delay: 2.2, opacity: 0.75, color: "#22d3ee", width: 2 },
  { left: "31%", height: 110, duration: 5.2, delay: 0.8, opacity: 0.6, color: "#3b82f6", width: 1.5 },
  { left: "38%", height: 130, duration: 6.0, delay: 2.8, opacity: 0.65, color: "#38bdf8", width: 2 },
  { left: "46%", height: 90, duration: 4.6, delay: 1.2, opacity: 0.5, color: "#06b6d4", width: 1.5 },
  { left: "54%", height: 170, duration: 6.8, delay: 1.8, opacity: 0.8, color: "#22d3ee", width: 2.5 },
  { left: "62%", height: 120, duration: 5.4, delay: 0.4, opacity: 0.6, color: "#60a5fa", width: 1.5 },
  { left: "69%", height: 150, duration: 6.2, delay: 2.5, opacity: 0.7, color: "#38bdf8", width: 2 },
  { left: "77%", height: 85, duration: 4.9, delay: 1.6, opacity: 0.5, color: "#06b6d4", width: 1.5 },
  { left: "84%", height: 155, duration: 6.4, delay: 0.9, opacity: 0.75, color: "#22d3ee", width: 2 },
  { left: "91%", height: 105, duration: 5.1, delay: 2.1, opacity: 0.55, color: "#3b82f6", width: 1.5 },
  { left: "97%", height: 135, duration: 5.7, delay: 1.0, opacity: 0.65, color: "#60a5fa", width: 2 },
];

export default function TechRainBeams() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[220px] sm:top-[260px] h-[880px] overflow-hidden z-0 select-none"
    >
      {/* Array of falling tech beams cascading seamlessly deep down */}
      {BEAMS.map((beam, idx) => (
        <div
          key={idx}
          className="absolute top-0 flex flex-col items-center will-change-transform"
          style={{
            left: beam.left,
            animation: `techBeamDrop ${beam.duration}s cubic-bezier(0.4, 0, 0.2, 1) ${beam.delay}s infinite`,
            ["--beam-opacity" as string]: beam.opacity,
          }}
        >
          {/* Vertical light streak with glowing gradient */}
          <div
            style={{
              width: `${beam.width || 1.5}px`,
              height: `${beam.height}px`,
              background: `linear-gradient(180deg, transparent 0%, ${beam.color} 75%, #ffffff 100%)`,
              boxShadow: `0 0 8px 1px ${beam.color}`,
            }}
            className="rounded-full"
          />

          {/* Glowing head / particle droplet at the bottom tip */}
          <div
            className="rounded-full bg-white will-change-transform"
            style={{
              width: `${(beam.width || 1.5) * 2 + 1}px`,
              height: `${(beam.width || 1.5) * 2 + 1}px`,
              boxShadow: `0 0 10px 2.5px ${beam.color}, 0 0 4px #ffffff`,
              marginTop: "-2px",
              animation: `beamHeadPulse 1.8s ease-in-out infinite`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
