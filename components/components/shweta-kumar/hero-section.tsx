"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <section ref={ref} className="md:mt-12 h-[70vh] bg-[url('/shweta/assets/hero_footer/Mobile/hero.png')] bg-cover bg-center bg-no-repeat md:h-[95vh] md:bg-[url('/shweta/assets/hero_footer/Desktop/hero.png')] md:bg-cover md:bg-top md:bg-no-repeat md:relative">
            <div className="flex flex-col justify-center h-full">
                <div className="w-full flex-1 text-center relative mt-0 max-w-3xl mx-auto">
                    <motion.span
                        className="text-purple-900 mb-2 opacity-30 absolute bottom-0 left-[20%] font-bold text-7xl md:bottom-20 md:left-0 md:text-9xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 0.3, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Hello
                    </motion.span>
                    <motion.span
                        className="font-bold absolute bottom-0 left-[30%] text-purple-900 text-4xl md:bottom-20 md:left-14 md:text-6xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        I am Shweta.
                    </motion.span>
                </div>
                <motion.div
                    className="mx-auto text-center py-8 md:hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <p className="text-lg font-bold">
                        I coach leaders like you to
                        <br />
                        experience infinite alignment
                        <br />
                        within yourself, with your team,
                        <br />
                        and everyone around you.
                    </p>
                </motion.div>
                <motion.div
                    className="hidden md:block max-w-2xl w-full mx-auto flex-1 pb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <p className="text-xl ">
                        I coach leaders like you to experience
                        <br />
                        <b>infinite alignment</b> within yourself,
                        <br />
                        and everyone around you.
                        <br />
                        <br />
                        When you move as one, everything
                        <br />
                        changes. Invincibility blooms, decisions
                        <br />
                        get sharper, execution flows effortlessly,
                        <br />
                        impact becomes deeper, and
                        <br />
                        leadership feels a whole lot lighter.
                    </p>
                </motion.div>
            </div>
            <motion.div
                className="hidden md:flex absolute bottom-0 left-[50%] bg-gradient-to-r from-[#FA6609] via-[#CCF000] to-[#FA6609] -translate-x-1/2 w-[60%] text-center translate-y-1/2 h-20 rounded-xl shadow-xl p-1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                <div className="bg-[url('/shweta/assets/process/bg.jpg')] bg-cover bg-center bg-no-repeat w-full h-full rounded-lg flex items-center justify-center px-6">
                    <p className="md:text-sm md:font-semibold lg:font-bold lg:text-lg text-white tracking-wide">
                        <span className="text-[#CCF000]">•</span> Leadership Coach{" "}
                        <span className="text-[#CCF000]">•</span> Founder of InvincibleYOU{" "}
                        <span className="text-[#CCF000]">•</span> The People Whisperer
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
