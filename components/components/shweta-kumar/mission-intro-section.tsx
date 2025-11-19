"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function MissionIntroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <section ref={ref} className=" py-8 px-4 bg-white md:bg-[#e7e9dc] md:py-24">
            <motion.div className="max-w-md mx-auto text-gray-800 space-y-6 md:hidden text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="text-2xl font-bold text-purple-900 leading-tight">
                    You&apos;re on a great mission driving huge goals,
                </h2>

                <p className="text-lg font-bold">
                    but something&apos;s holding you back?
                </p>

                <div className="space-y-4 text-base leading-relaxed px-4">
                    <p>
                        If decisions take too long, yet teams aren&apos;t fully on board,
                        or if you are feeling like carrying the weight of leadership all
                        alone, what might be missing isn&apos;t another framework or KPI.{" "}
                        <br />
                    </p>
                    <p>
                        The difference between a strategy that stalls and one that scales,
                        is a leadership culture where trust &amp; alignment drive
                        execution. And this starts with you.
                    </p>
                </div>
            </motion.div>
            <Link href="#testimonials">
                <motion.div
                    className="flex flex-col items-center justify-center relative h-[200px] mt-8 md:hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <img
                        src="/shweta/assets/btn/btn1.png"
                        alt="btn"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[170px] w-[170px] shadow-2xl rounded-full"
                    />
                    <p className="text-center mb-2 z-10 text-xl text-[#CCFF00] font-bold">
                        {/* cta to mail */}
                        YOU
                        <br />
                        DESERVE
                        <br />
                        ALIGNMENT
                        <br />
                    </p>
                    <img
                        src="/shweta/assets/double_arrow_yellow.png"
                        alt="arrows"
                        className="w-4 h-4 z-10"
                    />
                </motion.div>
            </Link>
            <div className="hidden md:flex items-center justify-center gap-10 max-w-4xl mx-auto">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <img
                        src="/shweta/assets/btn/btn1.png"
                        alt="btn"
                        className="w-[350px] shadow-2xl rounded-full"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <p className="text-2xl font-bold text-[#ccff00] leading-tight">
                            YOU DESERVE
                            <br />
                            ALIGNMENT
                        </p>
                        <p className="text-[#ccff00] leading-tight">
                            -----------------------------
                        </p>
                        <p className="text-white  leading-tight">
                            Values{" "}
                            <img
                                src="/shweta/assets/yellow_infinity.png"
                                alt="arrow"
                                className="w-4 inline"
                            />{" "}
                            Work
                        </p>
                        <p className="text-[#ccff00] leading-tight">
                            -----------------------------
                        </p>
                        <p className="text-white  leading-tight">
                            Ability{" "}
                            <img
                                src="/shweta/assets/yellow_infinity.png"
                                alt="arrow"
                                className="w-4 inline"
                            />{" "}
                            Ambition
                        </p>
                        <p className="text-[#ccff00] leading-tight">
                            -----------------------------
                        </p>
                        <p className="text-white  leading-tight">
                            Vision{" "}
                            <img
                                src="/shweta/assets/yellow_infinity.png"
                                alt="arrow"
                                className="w-4 inline"
                            />{" "}
                            Team
                        </p>
                        <p className="text-[#ccff00] leading-tight">
                            -----------------------------
                        </p>
                        <p className="text-white  leading-tight">
                            Potential{" "}
                            <img
                                src="/shweta/assets/yellow_infinity.png"
                                alt="arrow"
                                className="w-4 inline"
                            />{" "}
                            Invincibility
                        </p>
                        <p className="text-[#ccff00] leading-tight">
                            -----------------------------
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p className="text-4xl font-bold text-purple-900">
                        You&apos;re on a great mission
                        <br />
                        driving huge goals...
                    </p>
                    <p className="text-xl font-bold mt-6">
                        but it feels like something&apos;s holding you back?
                    </p>
                    <div className="flex items-center gap-2 my-4">
                        <div className="h-[90px] w-1 bg-gray-400  rounded-full"></div>
                        <p className="text-gray-500 font-semibold">
                            <i>
                                Brainstorming sessions spark friction, instead of action.
                                <br />
                                Decisions take too long, yet teams aren&apos;s fully on board.
                                <br />
                                Silos and unspoken tensions slow strategy execution.
                                <br />
                                Feeling like carrying the weight of leadership all alone.
                            </i>
                        </p>
                    </div>
                    <p className="mb-6">
                        What might be missing isn&apos;t another framework
                        <br />
                        or KPI. The difference between a strategy
                        <br />
                        that stalls and one that scales, is a leadership culture
                        <br />
                        where trust &amp; alignment drive execution. And
                        <br />
                        this starts with you.
                    </p>
                    {/* mailto:link add subject if possible, "" */}
                    <Link href="mailto:shweta@invincibleyou.world">
                        <p className="text-purple-900 font-bold text-xl hover:underline">
                            Let&apos;s make this your reality{" "}
                            <img
                                src="/shweta/assets/double_arrow_purple.png"
                                alt="arrow"
                                className="w-6 inline"
                            />
                        </p>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
