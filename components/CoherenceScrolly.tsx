"use client";

import React, { useMemo, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useInView } from "react-intersection-observer";

/**
 * Coherence Scrollytelling - single file component
 *
 * Usage: place <CoherenceScrolly /> inside a Next page.
 *
 * Technique:
 * - Left column: step text blocks which toggle "active" using intersection observer
 * - Right column: sticky SVG visual that updates based on activeStep
 *
 * Notes: tweak colors, positions and counts to match your brand.
 */

type StepId = 0 | 1 | 2 | 3;

export default function CoherenceScrolly() {
  const [active, setActive] = useState<StepId>(0);

  // Step refs (we use one observer per step)
  const [refHero, inViewHero] = useInView({ threshold: 0.6 });
  const [refDrift, inViewDrift] = useInView({ threshold: 0.6 });
  const [refCode, inViewCode] = useInView({ threshold: 0.6 });
  const [refBridge, inViewBridge] = useInView({ threshold: 0.6 });

  // flip active depending on which block is in view (priority: bottom-most visible)
  React.useEffect(() => {
    if (inViewBridge) setActive(3);
    else if (inViewCode) setActive(2);
    else if (inViewDrift) setActive(1);
    else if (inViewHero) setActive(0);
  }, [inViewHero, inViewDrift, inViewCode, inViewBridge]);

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      {/* HERO */}
      <section ref={refHero} className="relative min-h-screen grid place-items-center">
        <div className="absolute inset-0">
          {/* sticky visual sits here */}
          <StickyVisual active={active} />
        </div>

        <div className="relative z-10 max-w-3xl text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation.
          </p>
        </div>
      </section>

      {/* STEPS + TEXT */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-24 px-6">
        <div className="space-y-32">
          <div ref={refDrift} className="min-h-[40vh] flex items-center">
            <StepCard title="Consectetur adipiscing" index={1}>
              Ut enim ad minim veniam quis nostrud exercitation ullamco. Laboris nisi ut aliquip ex ea
              commodo consequat duis aute.
            </StepCard>
          </div>

          <div ref={refCode} className="min-h-[40vh] flex items-center">
            <StepCard title="Tempor incididunt" index={2}>
              Excepteur sint occaecat cupidatat non proident sunt in culpa. Officia deserunt mollit anim id
              est laborum sed perspiciatis.
            </StepCard>
          </div>

          <div ref={refBridge} className="min-h-[40vh] flex items-center">
            <StepCard title="Dolore magna aliqua" index={3}>
              Quis autem vel eum iure reprehenderit qui in ea voluptate. Velit esse quam nihil molestiae
              consequatur vel illum dolore.
            </StepCard>
          </div>
        </div>

        {/* Right column placeholder to preserve layout on wide screens (visual is sticky in the hero) */}
        <div className="hidden md:block" />
      </section>

      <footer className="py-20 text-center">
        <button className="bg-fuchsia-500 hover:bg-fuchsia-600 px-6 py-3 rounded-full font-semibold">
          Lorem ipsum dolor sit
        </button>
      </footer>
    </main>
  );
}

/* ---------- Step card ---------- */
function StepCard({ title, children, index }: { title: string; children: React.ReactNode; index: number }) {
  return (
    <article className="bg-neutral-850/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/5">
      <h3 className="text-2xl font-bold mb-3">
        <span className="mr-3 text-fuchsia-400">0{index}</span>
        {title}
      </h3>
      <div className="text-neutral-300">{children}</div>
    </article>
  );
}

/* ---------- Sticky visual (SVG based) ---------- */
/**
 * Behavior:
 * - active 0: clustered, soft glow
 * - active 1: drift => positions move outward and flicker (opacity pulses)
 * - active 2: code => some dots pulse brighter (individ. recovery)
 * - active 3: bridge => lines drawn connecting many dots + unified glow
 */
function StickyVisual({ active }: { active: StepId }) {
  // seed fixed positions (normalized 0..1). You can generate or load from JSON for variety.
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
      [0.75, 0.55],
      [0.5, 0.75],
    ],
    []
  );

  // map to screen coords inside SVG width/height
  const w = 520;
  const h = 520;

  // helper to compute drift offset (when active === 1)
  const driftFactor = active === 1 ? 1 : active > 1 ? 0.3 : 0;
  // when active === 0 (hero) dots tightly clustered; when 1 driftFactor bigger; when 2 start coming back; when 3 connect
  const activeIsDrifting = active === 1;
  const activeIsCoding = active === 2;
  const activeIsBridging = active === 3;
  
  // Center point for outward movement
  const centerX = 0.5;
  const centerY = 0.5;

  return (
    <div className="pointer-events-none md:fixed md:top-24 md:right-1/2 md:translate-x-1/2 z-0 w-[min(90vw,560px)] h-[min(90vw,560px)] flex items-center justify-center">
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%" role="img" aria-hidden>
        {/* soft background glow */}
        <defs>
          <radialGradient id="g" cx="50%" cy="45%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={activeIsBridging ? 0.14 : 0.08} />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity={activeIsBridging ? 0.06 : 0.02} />
            <stop offset="100%" stopColor="#000000" stopOpacity={0} />
          </radialGradient>
          <filter id="blur" x="-50%" width="200%" y="-50%" height="200%">
            <feGaussianBlur stdDeviation="18" result="b" />
            <feBlend in="SourceGraphic" in2="b" />
          </filter>
        </defs>

        <rect width={w} height={h} fill="transparent" />

        {/* lines (draw when bridging) */}
        <g>
          <AnimatePresence>
            {activeIsBridging &&
              base.map((p1, i) =>
                base.map((p2, j) => {
                  if (j <= i) return null;
                  const x1 = p1[0] * w;
                  const y1 = p1[1] * h;
                  const x2 = p2[0] * w;
                  const y2 = p2[1] * h;
                  // only draw some lines for clarity (every other pair)
                  if ((i + j) % 3 !== 0) return null;
                  const dashLen = Math.hypot(x2 - x1, y2 - y1);
                  return (
                    <motion.line
                      key={`line-${i}-${j}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#8b5cf6"
                      strokeOpacity={0.08}
                      strokeWidth={2}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1, strokeOpacity: 0.18 }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      style={{ vectorEffect: "non-scaling-stroke" }}
                    />
                  );
                })
              )}
          </AnimatePresence>
        </g>

        {/* dots */}
        <g filter={activeIsBridging ? "url(#blur)" : undefined}>
          {base.map((p, i) => {
            const cx = p[0] * w;
            const cy = p[1] * h;

            // Calculate outward direction from center for drift
            const vectorX = p[0] - centerX;
            const vectorY = p[1] - centerY;
            const distance = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
            const normalizedX = distance > 0 ? vectorX / distance : 0;
            const normalizedY = distance > 0 ? vectorY / distance : 0;
            
            // Apply outward movement when drifting, keep position in coding step
            const driftDistance = activeIsDrifting || activeIsCoding ? 80 : 0;
            const dx = normalizedX * driftDistance;
            const dy = normalizedY * driftDistance;
            const finalX = cx + dx;
            const finalY = cy + dy;

            // flicker variations - random delay per dot for staggered effect
            const flickerDelay = i * 0.08;
            const baseOpacity = active === 0 ? 1 : activeIsDrifting ? 0.6 : activeIsCoding ? 1 : 0.95;
            const scale = active === 0 ? 1.15 : activeIsDrifting ? 0.85 : activeIsCoding ? 1.2 : 1.1;

            return (
              <motion.g
                key={`dot-${i}`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: baseOpacity,
                  x: finalX - cx,
                  y: finalY - cy,
                  scale,
                }}
                transition={{
                  delay: i * 0.02,
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.15,
                }}
              >
                {/* outer halo */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={14}
                  fill="none"
                  stroke="#8b5cf6"
                  strokeOpacity={active === 0 ? 0.2 : activeIsBridging ? 0.16 : 0.06}
                  strokeWidth={active === 0 ? 12 : activeIsBridging ? 18 : 8}
                  animate={
                    activeIsDrifting
                      ? { 
                          strokeOpacity: [0.12, 0.01, 0.1, 0.02, 0.08, 0.01, 0.02],
                        }
                      : activeIsCoding
                      ? {
                          strokeOpacity: [0.06, 0.01, 0.06, 0.02, 0.06, 0.01, 0.18],
                        }
                      : {}
                  }
                  transition={{
                    duration: activeIsDrifting || activeIsCoding ? 1.8 : 1.2,
                    repeat: 0,
                    delay: activeIsDrifting || activeIsCoding ? flickerDelay : 0,
                    ease: [0.45, 0.05, 0.55, 0.95],
                  }}
                />

                {/* main dot */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={6.6}
                  fill="#8b5cf6"
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                  animate={
                    activeIsDrifting
                      ? { 
                          opacity: [1, 0.15, 1, 0.2, 0.95, 0.1, 0.25],
                          scale: [1, 0.7, 1.05, 0.65, 1.1, 0.6, 0.75] 
                        }
                      : activeIsCoding
                      ? { 
                          opacity: [0.25, 0.1, 0.3, 0.15, 0.35, 0.1, 1],
                          scale: [0.75, 0.6, 0.8, 0.65, 0.85, 0.6, 1.2] 
                        }
                      : activeIsBridging
                      ? { opacity: [0.9, 1, 0.95], scale: [1.05, 1.18, 1.06] }
                      : { opacity: 1, scale: 1.02 }
                  }
                  transition={{
                    duration: activeIsDrifting || activeIsCoding ? 1.8 : 1.2,
                    repeat: activeIsDrifting || activeIsCoding ? 0 : activeIsBridging ? Infinity : 0,
                    repeatType: "loop",
                    delay: activeIsDrifting || activeIsCoding ? flickerDelay : i * 0.05,
                    ease: activeIsDrifting || activeIsCoding ? [0.45, 0.05, 0.55, 0.95] : "easeInOut",
                  }}
                />
              </motion.g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

