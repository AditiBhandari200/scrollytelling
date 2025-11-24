"use client";

import React, { useMemo, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Coherence Scrollytelling - single file component
 *
 * Usage: place <CoherenceScrolly /> inside a Next page.
 *
 * Technique:
 * - Scroll-scrubbable animations that respond directly to scroll position
 * - Sticky SVG visual that updates based on scroll progress
 *
 * Notes: tweak colors, positions and counts to match your brand.
 */

export default function CoherenceScrolly() {
  const containerRef = useRef<HTMLElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const bridgeRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate progress for each section (0-1)
  // Section 1 (Drift): 0-0.33, Section 2 (Code): 0.33-0.66, Section 3 (Bridge): 0.66-1.0
  const driftProgress = useTransform(scrollYProgress, [0, 0.33], [0, 1], { clamp: true });
  const codeProgress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1], { clamp: true });
  const bridgeProgress = useTransform(scrollYProgress, [0.66, 1], [0, 1], { clamp: true });

  // Determine which section is active based on scroll
  const activeSection = useTransform(scrollYProgress, (progress) => {
    if (progress < 0.33) return 1; // Drift
    if (progress < 0.66) return 2; // Code
    return 3; // Bridge
  });

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-neutral-900">
      {/* STEPS + TEXT */}
      <section className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-24 px-6">
        {/* Sticky visual - always visible and scrubbable */}
        <div className="hidden md:block fixed top-24 right-1/2 translate-x-1/2 z-0 w-[min(90vw,560px)] h-[min(90vw,560px)] pointer-events-none">
          <StickyVisual 
            driftProgress={driftProgress}
            codeProgress={codeProgress}
            bridgeProgress={bridgeProgress}
            activeSection={activeSection}
            scrollYProgress={scrollYProgress}
          />
        </div>
        <div className="space-y-32">
          <div ref={driftRef} className="min-h-[40vh] flex items-center">
          </div>

          <div ref={codeRef} className="min-h-[40vh] flex items-center">
          </div>

          <div ref={bridgeRef} className="min-h-[40vh] flex items-center">
          </div>
        </div>

        {/* Right column placeholder to preserve layout on wide screens (visual is sticky in the hero) */}
        <div className="hidden md:block" />
      </section>

    </main>
  );
}

/* ---------- Step card ---------- */
function StepCard({ title, children, index }: { title: string; children: React.ReactNode; index: number }) {
  return (
    <article className="bg-neutral-100/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-neutral-300/50">
      <h3 className="text-2xl font-bold mb-3">
        <span className="mr-3 text-fuchsia-500">0{index}</span>
        {title}
      </h3>
      <div className="text-neutral-700">{children}</div>
    </article>
  );
}

/* ---------- Sticky visual (SVG based) ---------- */
/**
 * Behavior:
 * - Scroll-scrubbable animations based on scroll progress
 * - driftProgress: 0-1 for drift animation (dots move from line to random positions)
 * - codeProgress: 0-1 for code animation (dots arrange in circle)
 * - bridgeProgress: 0-1 for bridge animation (lines connect dots)
 */
function StickyVisual({ 
  driftProgress, 
  codeProgress, 
  bridgeProgress,
  activeSection,
  scrollYProgress
}: { 
  driftProgress: any;
  codeProgress: any;
  bridgeProgress: any;
  activeSection: any;
  scrollYProgress: any;
}) {
  // seed fixed positions (normalized 0..1). 8 dots total.
  const base = useMemo(
    () => [
      [0.35, 0.35],
      [0.65, 0.65],
      [0.3, 0.5],
      [0.7, 0.4],
      [0.5, 0.25],
      [0.35, 0.7],
      [0.72, 0.72],
      [0.25, 0.38],
    ],
    []
  );

  // map to screen coords inside SVG width/height
  const w = 520;
  const h = 520;
  
  // Center point for outward movement
  const centerX = 0.5;
  const centerY = 0.5;

  return (
    <div className="pointer-events-none w-[min(90vw,560px)] h-[min(90vw,560px)] flex items-center justify-center">
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%" role="img" aria-hidden>
        {/* soft background glow */}
        <defs>
          <radialGradient id="g" cx="50%" cy="45%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#000000" stopOpacity={0} />
          </radialGradient>
          <filter id="blur" x="-50%" width="200%" y="-50%" height="200%">
            <feGaussianBlur stdDeviation="18" result="b" />
            <feBlend in="SourceGraphic" in2="b" />
          </filter>
        </defs>

        <rect width={w} height={h} fill="transparent" />

        {/* Background glow that intensifies during bridge */}
        <motion.circle
          cx={centerX * w}
          cy={centerY * h}
          r={250}
          fill="url(#g)"
          opacity={useTransform(bridgeProgress, [0, 1], [0.3, 0.6])}
        />

        {/* lines (draw when bridging) */}
        <g>
          {base.map((p, i) => {
                // Connect to adjacent dot (next in circle, wrapping around)
                const nextIndex = (i + 1) % base.length;
                
                // Calculate circle positions for both dots
                const circleRadius = 180;
                const centerXPos = centerX * w;
                const centerYPos = centerY * h;
                const angle1 = (i / base.length) * 2 * Math.PI;
                const angle2 = (nextIndex / base.length) * 2 * Math.PI;
                const x1 = centerXPos + Math.cos(angle1) * circleRadius;
                const y1 = centerYPos + Math.sin(angle1) * circleRadius;
                const x2 = centerXPos + Math.cos(angle2) * circleRadius;
                const y2 = centerYPos + Math.sin(angle2) * circleRadius;
                
                // Calculate the angle difference
                let angleDiff = angle2 - angle1;
                // Normalize to [-π, π]
                if (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
                if (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;
                
                // Determine if we should use the large arc flag
                const largeArcFlag = Math.abs(angleDiff) > Math.PI ? 1 : 0;
                // Always sweep in the positive direction (clockwise)
                const sweepFlag = 1;
                
                // Create circular arc using SVG arc command (A)
                // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
                const pathData = `M ${x1} ${y1} A ${circleRadius} ${circleRadius} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2}`;
                
                const pathLength = useTransform(bridgeProgress, [0, 1], [0, 1]);
                const strokeOpacity = useTransform(bridgeProgress, [0, 1], [0, 0.6]);
                
                return (
                  <motion.path
                    key={`arc-${i}-${nextIndex}`}
                    d={pathData}
                    fill="none"
                    stroke="#808080"
                    strokeWidth={6}
                    strokeLinecap="round"
                    style={{ 
                      vectorEffect: "non-scaling-stroke",
                      pathLength,
                      strokeOpacity,
                    }}
                  />
                );
              })}
        </g>

        {/* dots */}
        <g>
          {base.map((p, i) => {
            const cx = p[0] * w;
            const cy = p[1] * h;

            // Calculate outward direction from center for drift
            const vectorX = p[0] - centerX;
            const vectorY = p[1] - centerY;
            const distance = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
            const normalizedX = distance > 0 ? vectorX / distance : 0;
            const normalizedY = distance > 0 ? vectorY / distance : 0;
            
            // For drift animation: start dots in a horizontal line, then move to random positions
            const linePadding = 0.15;
            const lineWidth = w * (1 - 2 * linePadding);
            const lineStartX = base.length > 1 
              ? w * linePadding + (i / (base.length - 1)) * lineWidth 
              : w * 0.5;
            const lineStartY = h * 0.5;
            
            // Code/Bridge: random positions -> circle
            const circleRadius = 180;
            const angle = (i / base.length) * 2 * Math.PI;
            const circleX = centerX * w + Math.cos(angle) * circleRadius;
            const circleY = centerY * h + Math.sin(angle) * circleRadius;
            
            // Calculate drift end position
            const driftEndX = cx + normalizedX * 80;
            const driftEndY = cy + normalizedY * 80;
            
            // Combine transforms: drift phase uses driftX/Y, then transitions to circle
            const driftXValue = useTransform(driftProgress, [0, 1], [lineStartX, driftEndX]);
            const driftYValue = useTransform(driftProgress, [0, 1], [lineStartY, driftEndY]);
            
            // Final position: blend between drift end and circle based on codeProgress
            const finalX = useTransform(
              [driftXValue, codeProgress],
              ([driftX, code]: number[]) => {
                return driftX + (circleX - driftX) * code;
              }
            );
            
            const finalY = useTransform(
              [driftYValue, codeProgress],
              ([driftY, code]: number[]) => {
                return driftY + (circleY - driftY) * code;
              }
            );
            
            // Opacity: fade in during drift
            const opacity = useTransform(driftProgress, [0, 0.2], [0, 1], { clamp: true });
            
            // Apply blur filter during bridge
            const shouldBlur = useTransform(bridgeProgress, [0, 1], [0, 1]);

            return (
              <motion.g
                key={`dot-${i}`}
                style={{
                  x: useTransform(finalX, (x) => x - cx),
                  y: useTransform(finalY, (y) => y - cy),
                  opacity,
                  filter: useTransform(shouldBlur, (blur) => blur > 0.5 ? "url(#blur)" : "none"),
                }}
              >
                {/* SVG ellipse image */}
                <motion.image
                  href="/ellipse-66.svg"
                  x={cx - 15}
                  y={cy - 15.5}
                  width={30}
                  height={31}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              </motion.g>
            );
          })}
        </g>

        {/* Text that reveals during drift animation */}
        <motion.g
          opacity={useTransform(scrollYProgress, [0, 0.2, 0.33], [0, 1, 0], { clamp: true })}
        >
            <text
              x={centerX * w}
              y={h * 0.4}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#8b5cf6"
              fontSize="20"
              fontWeight="500"
              style={{ pointerEvents: "none" }}
            >
              Strategy without alignment is intent.
            </text>
            <text
              x={centerX * w}
              y={h * 0.4 + 28}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#8b5cf6"
              fontSize="20"
              fontWeight="500"
              style={{ pointerEvents: "none" }}
            >
              Alignment without trust is unstable.
            </text>
            <text
              x={centerX * w}
              y={h * 0.4 + 56}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#8b5cf6"
              fontSize="20"
              fontWeight="500"
              style={{ pointerEvents: "none" }}
            >
              And trust that doesn't deliver results is just optimism.
            </text>
        </motion.g>

        {/* Text and button that reveals during code animation */}
        <motion.g
          opacity={useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0, 1, 0], { clamp: true })}
        >
            <text
              x={centerX * w}
              y={h * 0.4}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#8b5cf6"
              fontSize="24"
              fontWeight="600"
              style={{ pointerEvents: "none" }}
            >
              We call this the Executive Drift.
            </text>
            <text
              x={centerX * w}
              y={h * 0.4 + 36}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#8b5cf6"
              fontSize="24"
              fontWeight="600"
              style={{ pointerEvents: "none" }}
            >
              And it's Expensive.
            </text>
            <foreignObject
              x={centerX * w - 120}
              y={h * 0.4 + 60}
              width="240"
              height="50"
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <button
                  style={{
                    padding: '12px 32px',
                    borderRadius: '9999px',
                    backgroundColor: '#8b5cf6',
                    color: 'white',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8b5cf6'}
                >
                  Test your Drift now!
                </button>
              </div>
            </foreignObject>
        </motion.g>

        {/* Text that reveals during bridge animation */}
        <motion.g
          opacity={useTransform(scrollYProgress, [0.66, 0.8, 1], [0, 1, 1], { clamp: true })}
        >
            <text
              x={centerX * w}
              y={h * 0.35}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#8b5cf6"
              fontSize="18"
              fontWeight="500"
              style={{ pointerEvents: "none" }}
            >
              <tspan x={centerX * w} dy="0">We eliminate drift by hardwiring alignment,</tspan>
              <tspan x={centerX * w} dy="24">trust, and execution beneath the surface.</tspan>
            </text>
            <text
              x={centerX * w}
              y={h * 0.35 + 60}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#8b5cf6"
              fontSize="24"
              fontWeight="600"
              style={{ pointerEvents: "none" }}
            >
              Durable, Measurable, Unshakable.
            </text>
        </motion.g>
      </svg>
    </div>
  );
}

