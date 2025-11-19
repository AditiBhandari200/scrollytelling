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
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ReadMore } from "@/components/ui/read-more";
import { useQueryResources } from "@/hooks/useResources";
import { useCarouselControl } from "./hooks";

export default function LinkedInSection() {
    const { setApi: setBlogApi, current: blogCurrent } = useCarouselControl();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Get resources and filter by author "shweta"
    const { data: allResources, loading: resourcesLoading } = useQueryResources();
    const shwetaResources = allResources.filter(resource =>
        resource.author?.toLowerCase().includes('shweta')
    );

    // Combine Shweta's resources with the existing Medium article
    const blogArticles = [
        ...shwetaResources,
        {
            id: -1, // Use negative ID to distinguish from database resources
            title: "Executive Drift: The Silent Killer of Strategic Execution",
            link: "https://medium.com/@shweta_51691/executive-drift-the-silent-killer-of-strategic-execution-642acf95a86a",
            author: "Shweta Kumar",
            details: "This article discusses 'Executive Drift,' a silent erosion of alignment within leadership teams that undermines strategic execution. It's a subtle misalignment that can lead to failed initiatives, even in high-performing companies, costing millions. The author identifies 10 signs to recognize this drift, explores its causes, and promises a solution in Part 2.",
            created_at: new Date().toISOString(),
            slug: "",
        }
    ];

    return (
        <section ref={ref} className="bg-[#e7e9dc] py-16 px-4" id="mission">
            <div className="mx-auto text-center md:hidden">
                <motion.p
                    className="text-2xl font-bold text-purple-900 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Not ready to invest in
                    <br />
                    coaching yet?
                </motion.p>

                <motion.p
                    className="text-gray-800 text-lg mb-12 font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    When you feel ready, let&apos;s talk. Until then....
                    <br />
                    indulge yourself in some deep reflections.
                    <br />
                    Once a week. This will inspire you to meet
                    <br />
                    your inner Guru, and lead you on your path
                    <br />
                    to become your Invincible self.
                </motion.p>

                <Link
                    href="http://linkedin.com/in/shwetakumarprofile"
                    target="_blank"
                >
                    <motion.div
                        className="flex justify-center items-center gap-2 flex-col relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <img
                            src="/shweta/assets/btn/btn2.png"
                            alt="linkedin"
                            className="w-60"
                        />
                        <span className="font-bold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 ">
                            Follow me on
                            <br />
                            Linkedin
                            <img
                                src="/shweta/assets/double_arrow_yellow.png"
                                alt="arrow"
                                className="inline ml-2 h-3 filter grayscale invert"
                            />
                        </span>
                    </motion.div>
                </Link>
            </div>
            <div className="mx-auto items-center justify-between max-w-3xl hidden md:flex">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-4xl font-bold text-purple-900 mb-6">
                        Not ready to invest in coaching yet?
                    </p>

                    <p className="text-gray-800 text-xl mb-12">
                        When you feel ready, let&apos;s talk. Until then....
                        <br />
                        indulge yourself in some deep reflections. Once a week.
                        <br />
                        This will inspire you to meet your inner Guru, and
                        <br />
                        lead you on your path to become your Invincible self.
                    </p>
                </motion.div>

                <Link
                    href="http://linkedin.com/in/shwetakumarprofile"
                    target="_blank"
                >
                    <motion.div
                        className="flex justify-center items-center gap-2 flex-col relative hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img
                            src="/shweta/assets/btn/btn2.png"
                            alt="linkedin"
                            className="w-72"
                        />
                        <span className="font-bold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 ">
                            Follow me on
                            <br />
                            Linkedin
                            <img
                                src="/shweta/assets/double_arrow_yellow.png"
                                alt="arrow"
                                className="inline ml-2 h-3 filter grayscale invert"
                            />
                        </span>
                    </motion.div>
                </Link>
            </div>
            {/* Carousel for latest blogs by Shweta */}
            <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {resourcesLoading ? (
                    <div className="text-center py-8">
                        <p className="text-gray-600">Loading articles...</p>
                    </div>
                ) : blogArticles.length > 0 ? (
                    <>
                        <Carousel setApi={setBlogApi} className="max-w-3xl mx-auto mt-6" opts={{
                            loop: true,
                        }} plugins={[Autoplay({
                            delay: 4000,
                        })]}>
                            <CarouselContent>
                                {blogArticles.map((article) => (
                                    <CarouselItem key={article.id} className="md:basis-1/2 lg:basis-1/3">
                                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                            <CardHeader className="pb-3 min-h-[100px]">
                                                <CardTitle className="text-lg font-semibold line-clamp-2 text-purple-900">
                                                    {article.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="pb-3">
                                                <div className="flex flex-col gap-2 text-sm text-gray-600">
                                                    <ReadMore id={`article-${article.id}`} text={article.details || ''} amountOfCharacters={100} mode="characters" />
                                                </div>
                                            </CardContent>
                                            <CardFooter className="pt-0">
                                                <Link
                                                    href={article.slug ? `/resources/${article.slug}` : article.link ? article.link : '#'}
                                                    target={article.link ? "_blank" : "_self"}
                                                    className="block h-full"
                                                >
                                                    <p className="text-purple-900 font-semibold text-sm hover:underline">
                                                        Read more →
                                                    </p>
                                                </Link>
                                            </CardFooter>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                        <CarouselDots
                            items={blogArticles.length}
                            current={blogCurrent}
                            dotColor="yellow"
                        />
                    </>
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-600">No articles found.</p>
                    </div>
                )}
            </motion.div>
        </section>
    );
}
