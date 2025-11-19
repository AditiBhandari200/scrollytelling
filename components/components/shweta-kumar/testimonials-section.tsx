"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import CarouselDots from "@/components/carousel/carousel-dots";
import Autoplay from "embla-carousel-autoplay";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { ReadMore } from "@/components/ui/read-more";
import { useCarouselControl } from "./hooks";
import { testimonials } from "./constants";

export default function TestimonialsSection() {
    const { api: testimonialApi, setApi: setTestimonialApi, current: testimonialCurrent } = useCarouselControl();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const handlePrevious = () => {
        testimonialApi?.scrollPrev();
    };

    const handleNext = () => {
        testimonialApi?.scrollNext();
    };

    return (
        <section ref={ref} className="bg-[#e7e9dc] py-10 md:py-20" id="testimonials">
            <div className="">
                <motion.p
                    className="text-center text-2xl font-bold text-purple-900 md:hidden mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    When your infinite potential
                    <br />
                    meets invincibility,
                    <br />
                    you become unstoppable.
                </motion.p>
                <motion.p
                    className="text-center text-4xl mb-12 font-bold text-purple-900 hidden md:block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    When your infinite potential meets
                    <br />
                    invincibility, you become unstoppable.
                </motion.p>
            </div>
            <motion.div
                className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-[#e7e9dc] via-[#CCFF00] to-[#e7e9dc] my-6 py-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <p className="text-lg font-semibold md:text-2xl md:font-semibold">
                    Just like the 200+ leaders whom I&apos;ve coached.
                </p>
            </motion.div>
            <motion.div
                className="hidden md:block my-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {/* double arrow here, either open yt or play vid in modal */}
                <Link href={"https://youtu.be/rMGxgiawgPs"} target="_blank">
                    <p className="text-center text-xl font-semibold hover:underline">
                        Watch how the founders of Disprz - a growth stage company
                        <br />
                        experienced alignment, and how it transformed their
                        <br />
                        organization&apos;s thinking trajectory{" "}
                        <img
                            src="/shweta/assets/double_arrow_black.png"
                            alt="arrow"
                            className="w-5 inline"
                        />
                    </p>
                </Link>
            </motion.div>
            <motion.div
                className="mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                {/* CXO testimonials of shweta, specifically linked to her work */}
                <Carousel
                    setApi={setTestimonialApi}
                    className="max-w-sm md:max-w-2xl mx-auto"
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
                        {testimonials.map((testimonial, index) => (
                            // <CarouselItem key={index} className="pt-24 md:pt-16">
                            <CarouselItem key={index} className="">
                                <Card className="rounded-3xl max-w-[95%] mx-auto mb-2">
                                    {/* <CardHeader className="relative mb-10">
                    <div className="h-28 w-28 bg-white shadow-xl rounded-full mx-auto -translate-y-1/2 z-10 absolute top-0 left-1/2 -translate-x-1/2 md:left-[20%]">
                    </div>
                  </CardHeader> */}
                                    <CardContent className="pt-6 md:pt-8">
                                        <ReadMore
                                            id={index.toString()}
                                            text={`"${testimonial.quote}"`}
                                            amountOfCharacters={200}
                                            mode="characters"
                                            className="text-lg italic"
                                        />
                                    </CardContent>
                                    <CardFooter className="flex flex-col items-end">
                                        <p className="text-xl font-bold text-purple-900">
                                            {testimonial.name}
                                        </p>
                                        <p>
                                            {testimonial.position},
                                            <span className="font-semibold">
                                                {" "}
                                                {testimonial.company}
                                            </span>
                                        </p>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute -left-16 top-1/2 hover:scale-110 transition-all duration-300 -translate-y-1/2">
                        <button
                            className="p-2"
                            onClick={handlePrevious}
                        >
                            <img src="/shweta/assets/backward.png" alt="Previous" className="w-8" />
                        </button>
                    </div>
                    <div className="absolute -right-16 top-1/2 hover:scale-110 transition-all duration-300 -translate-y-1/2">
                        <button
                            className="p-2"
                            onClick={handleNext}
                        >
                            <img src="/shweta/assets/forward.png" alt="Next" className="w-8" />
                        </button>
                    </div>
                </Carousel>
                <CarouselDots
                    items={testimonials.length}
                    current={testimonialCurrent}
                    dotColor="yellow"
                />
            </motion.div>
        </section>
    );
}
