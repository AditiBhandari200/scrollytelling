"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function MobileBannerSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <section ref={ref} className="relative md:hidden">
            <motion.img
                src="/shweta/assets/bg_gradient.jpg"
                alt="bg"
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div className="w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <p className="text-lg font-semibold leading-relaxed">
                    • The People Whisperer • Leadership Coach <br />
                    • Founder of InvincibleYOU
                </p>
            </motion.div>
        </section>
    );
}
