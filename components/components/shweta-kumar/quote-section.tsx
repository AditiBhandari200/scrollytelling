"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function QuoteSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <section ref={ref} className=" py-16 bg-[url('/shweta/assets/quote.png')] bg-cover bg-center bg-no-repeat">
            <div className="max-w-md mx-auto md:hidden pl-8">
                <motion.h2
                    className="text-3xl font-bold text-[#CCFF00] mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Let&apos;s unearth your
                    <br />
                    path to infinity.
                </motion.h2>

                <motion.div
                    className="space-y-6 text-white text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p>
                        Within every seed lies the silent
                        <br />
                        power to become an invincible forest.
                    </p>

                    <p>
                        Similarly, within you, lies such infinite
                        <br />
                        potential. Let&apos;s discover it and let it
                        <br />
                        blossom, one reflection at a time.
                    </p>
                </motion.div>
                <motion.div
                    className="pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p
                        className="text-white text-lg"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                    >
                        Wishing you invincibility,
                    </p>
                    <p
                        className="text-2xl font-bold text-white italic"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                    >
                        Shweta Kumar
                    </p>
                </motion.div>
            </div>
            <div className="max-w-3xl mx-auto hidden md:block">
                <motion.h2
                    className="text-3xl font-bold text-[#CCFF00] mb-8"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Let&apos;s unearth your path to infinity.
                </motion.h2>

                <motion.div
                    className="space-y-6 text-white text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p>
                        Within every seed lies the silent power to
                        <br />
                        become an invincible forest. Similarly, within
                        <br />
                        you, lies such infinite potential. Let&apos;s discover it
                        <br />
                        and let it blossom, one reflection at a time.
                    </p>
                </motion.div>
                <motion.div
                    className="pt-8 text-right mt-36 pr-16 italic"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p
                        className="text-white text-lg mb-2"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                    >
                        Wishing you invincibility,
                    </p>
                    <p
                        className="text-3xl font-semibold text-white translate-x-[50px]"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                    >
                        Shweta Kumar
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
