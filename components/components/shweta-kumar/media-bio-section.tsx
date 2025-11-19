"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { Download } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useBiographyClipboard } from "./hooks";
import { biographyText } from "./constants";

export default function MediaBioSection() {
    const { copyBioToClipboard } = useBiographyClipboard(biographyText);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className="hidden md:block bg-[#e7e9dc] py-28 px-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between gap-16">
                <motion.div
                    className="flex-1 flex flex-col rounded-xl py-8 px-10 bg-[#d9dbd0] h-[470px]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-3xl font-bold text-purple-900 mb-6">
                        Media Assets
                    </p>
                    <a href="/shweta/assets/media/shweta.jpg" download="Shweta">
                        <div className="mb-6">
                            <p className="text-lg font-semibold mb-2">
                                Shweta&apos;s image
                            </p>
                            <div className="size-32 bg-[url('/shweta/assets/media/shweta.jpg')] bg-cover bg-center bg-no-repeat rounded-xl p-2">
                                <Download className="w-6 h-6 text-[#CCFF00] float-right" />
                            </div>
                        </div>
                    </a>
                    <div>
                        <p className="text-lg font-semibold mb-2">
                            InvincibleYOU logo identity
                        </p>
                        <div className="flex items-center gap-2">
                            <a href="/shweta/assets/media/jpg.jpg" download="InvincibleYOU">
                                <div className="relative size-32 bg-[url('/shweta/assets/media/jpg.jpg')] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden">
                                    <div className="absolute h-full w-full bg-black/70 rounded-lg flex items-center justify-center">
                                        <p className="text-white text-lg font-semibold">JPG</p>
                                    </div>
                                    <Download className="w-6 h-6 text-[#CCFF00] absolute top-2 right-2" />
                                </div>
                            </a>
                            <a href="/shweta/assets/media/png.png" download="InvincibleYOU">
                                <div className="relative size-32 bg-[url('/shweta/assets/media/png.png')] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden">
                                    <div className="absolute h-full w-full bg-black/70 rounded-lg flex items-center justify-center">
                                        <p className="text-white text-lg font-semibold">PNG</p>
                                    </div>
                                    <Download className="w-6 h-6 text-[#CCFF00] absolute top-2 right-2" />
                                </div>
                            </a>
                            <a
                                href="/shweta/assets/media/white.png"
                                download="InvincibleYOU"
                            >
                                <div className="relative size-32 bg-[url('/shweta/assets/media/white.png')] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden">
                                    <div className="absolute h-full w-full bg-black/70 rounded-lg flex items-center justify-center">
                                        <p className="text-white text-lg font-semibold">WHITE</p>
                                    </div>
                                    <Download className="w-6 h-6 text-[#CCFF00] absolute top-2 right-2" />
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="flex-1 bg-[#d9dbd0] py-8 px-10 rounded-xl h-[470px] flex flex-col"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-3xl font-bold text-purple-900 mb-6">
                        Professional Biography
                    </p>
                    <ScrollArea
                        type="always"
                        className="flex-1 pr-4 mb-8"
                        scrollBarClassName="bg-[#d9dbd0] rounded-full w-1 p-0"
                        thumbClassName="bg-purple-900 hover:bg-purple-800"
                    >
                        <p className="mb-2">
                            Shweta is passionate about the process of transformation at an
                            individual, team and organizational level.
                        </p>
                        <p className="mb-2">
                            She founded InvincibleYOU, an organization to inspire
                            individuals &amp; leadership teams to develop an invincible
                            mindset, and take the lead in steering towards their infinite
                            potential. They do it by stimulating transformations within safe
                            spaces that encourage deep reflections, to overcome
                            self-limiting beliefs.
                        </p>
                        <p className="mb-2">
                            With over 25 years of expertise in leadership development,
                            culture change, and organizational transformation, Shweta
                            chooses to be unstoppable. In recent years, she has honed her
                            focus on psychodrama, to catalyze even deeper transformations.
                        </p>
                        <p>
                            Additionally, Shweta is on a profound mission to uplift one
                            billion women, to help them move their identity to a different
                            trajectory. Her notable contributions to the field include
                            authored research papers such as &quot;Iridescent,&quot; a
                            global perspective on women&apos;s leadership published by OD
                            Alternatives, and &quot;Psychological Violence at the Workplace
                            - Impact on Early Career Women,&quot; published by INSEAD.
                        </p>
                    </ScrollArea>
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={copyBioToClipboard}
                            className="bg-purple-900 text-white font-semibold tracking-wide rounded-full hover:bg-purple-800 transition-all duration-300 "
                        >
                            Take a copy of Shweta&apos;s bio
                        </Button>
                        <Link
                            href="http://linkedin.com/in/shwetakumarprofile"
                            target="_blank"
                        >
                            <img
                                src="/shweta/assets/btn/lnkdn.png"
                                alt="linkedin"
                                className="w-10 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300"
                            />
                        </Link>
                        <Link href="https://invincibleyou.world/">
                            <img
                                src="/shweta/assets/btn/iyou.png"
                                alt="linkedin"
                                className="w-10 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300"
                            />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
