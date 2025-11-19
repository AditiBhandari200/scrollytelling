"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import CarouselDots from "@/components/carousel/carousel-dots";
import Autoplay from "embla-carousel-autoplay";
import { useCarouselControl } from "./hooks";
import { carouselItems } from "./constants";

export default function ProcessSection() {
    const { setApi, current } = useCarouselControl();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className="relative" id="process">
            <img
                src="/shweta/assets/process/mobile/bg.jpg"
                alt="img"
                className="w-full h-full md:hidden"
            />
            <img
                src="/shweta/assets/process/bg.jpg"
                alt="img"
                className="w-full h-full hidden md:block"
            />
            <img
                src="/shweta/assets/process/fg.png"
                alt="img"
                className="absolute top-0 left-0 w-full h-full hidden md:block"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-between md:hidden">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-center text-2xl font-bold mt-10 text-[#CCFF00]">
                        This is what coaching
                        <br />
                        with me means
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Carousel
                        setApi={setApi}
                        className="max-w-sm"
                        opts={{
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {carouselItems.map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="px-6 text-center flex flex-col items-center justify-center h-full">
                                        <p
                                            className="text-white text-lg px-6"
                                            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <CarouselDots
                        items={carouselItems.length}
                        current={current}
                        dotColor="green"
                    />
                </motion.div>
            </div>
            <div className="absolute inset-0 flex-col items-center justify-between hidden md:flex">
                <div className="flex-1 font-semibold text-white lg:text-lg md:text-base flex flex-col items-center justify-evenly my-20">
                    <motion.div
                        className="flex justify-center gap-[25vw] items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.p
                            className="text-right"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Stepping into a safe space
                            <br /> for deep reflections
                        </motion.p>
                        <motion.p
                            className="text-left"
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Inspiring action through <br />
                            small yet impactful steps
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="flex justify-center gap-[40vw] items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.p
                            className="text-right"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Uncovering what&apos;s
                            <br /> holding you back -<br /> visible &amp; invisible
                        </motion.p>
                        <motion.p
                            className="text-left"
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Realizing your true,
                            <br /> hidden and innate
                            <br /> infinite potential
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="flex justify-center gap-[50vw] items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <motion.p
                            className="text-right"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            Challenging <br />
                            self-limiting beliefs
                        </motion.p>
                        <motion.p
                            className="text-left -translate-x-1/2"
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            Meeting your <br />
                            invincible self
                        </motion.p>
                    </motion.div>
                </div>
                <motion.p
                    className="text-center lg:text-5xl font-bold text-[#CCFF00] md:mb-16 lg:mb-24 md:text-4xl"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                >
                    This is what coaching
                    <br />
                    with me means
                </motion.p>
            </div>
        </section>
    );
}
