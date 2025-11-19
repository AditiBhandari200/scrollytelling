"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useShwetaForm } from "./hooks";

export default function CTAServicesSection() {
    const { form, onSubmit, isSubmitting } = useShwetaForm();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className="bg-[#6A008E] py-12 px-4">
            <div className="text-center">
                <motion.div
                    className="mb-8 md:hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-3xl font-medium leading-[1.3] text-white mb-12">
                        How about experiencing this for yourself? Take the first small
                        step right away.
                    </p>
                    <p className="text-4xl font-bold text-[#CCFF00] mb-2">
                        Let&apos;s connect.
                    </p>
                    <p className="text-white text-lg">
                        Schedule a 15 minute call. It&apos;s on me.
                    </p>
                </motion.div>
                <div className="hidden md:block">
                    <motion.p
                        className="text-center text-4xl font-bold text-[#CCFF00]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        How about experiencing this for yourself?
                    </motion.p>
                    <motion.p
                        className="text-center text-white max-w-2xl mx-auto my-12 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Leadership coaching is not just an investment you are making for
                        yourself. When a leader is inspired, we unearth the invincibility
                        of the entire team. The entire organization moves faster with
                        fewer roadblocks when trust and alignment replace friction. I
                        believe, my life&apos;s mission is to inspire this ripple effect
                        of change, and it starts with you.
                    </motion.p>
                    <div className="flex justify-center items-center gap-12">
                        <div className="flex flex-col justify-center items-center group p-6 h-[230px] w-[230px] rounded-xl shadow-lg border-[3px] border-[#FA6609] bg-black/15">
                            <img
                                src="/shweta/assets/btn/radioitem1.png"
                                alt="coaching"
                                className="w-24 mx-auto opacity-50 pb-2 group-hover:hidden"
                            />
                            <p className="text-2xl font-bold text-white group-hover:hidden">
                                1-on-1 <br />
                                Coaching
                            </p>
                            <p className="text-white hidden group-hover:block mb-2">
                                For founders and <br />
                                leaders. Realize <br />
                                infinite potential. <br />
                            </p>
                            <p className="text-white hidden group-hover:block">
                                Overcome self-limiting
                                <br />
                                beliefs and leadership
                                <br />
                                loneliness.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center group p-6 h-[230px] w-[230px] rounded-xl shadow-lg border-[3px] border-[#FFCC00] bg-black/15">
                            <img
                                src="/shweta/assets/btn/radioitem2.png"
                                alt="coaching"
                                className="w-24 mx-auto opacity-50 pb-2 group-hover:hidden"
                            />
                            <p className="text-2xl font-bold text-white group-hover:hidden">
                                C-Suite <br />
                                Alignment
                            </p>
                            <p className="text-white hidden group-hover:block mb-2">
                                Identify what is stalling execution. One day workshop with
                                Shweta to sow the seeds of trust & alignment for unstoppable
                                strategy execution.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center group p-6 h-[230px] w-[230px] rounded-xl shadow-lg border-[3px] border-[#CCFF00] bg-black/15">
                            <img
                                src="/shweta/assets/btn/radioitem3.png"
                                alt="coaching"
                                className="w-24 mx-auto opacity-50 pb-2 group-hover:hidden"
                            />
                            <p className="text-2xl font-bold text-white group-hover:hidden">
                                Keynote & <br />
                                Webinars
                            </p>
                            <p className="text-white hidden group-hover:block mb-2">
                                Book Shweta&apos;s time for speaking at your event. Inspire a
                                mindset of mutual trust, compassion and invincibility. Welcome
                                a new order of leadership.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <p className="text-2xl font-semibold text-white mb-2">
                            Take the first small step right away.
                        </p>
                        {/* arrows below and link it email */}
                        <Link href="mailto:shweta@invincibleyou.world">
                            <p className="text-[#CCFF00] text-2xl font-semibold mb-2 hover:underline underline-offset-4">
                                Schedule a chat with me{" "}
                                <img
                                    src="/shweta/assets/double_arrow_green.png"
                                    alt="arrow"
                                    className="w-6 inline"
                                />
                            </p>
                        </Link>
                        <p className="text-white">15 minutes. It&apos;s on me.</p>
                    </div>
                </div>

                {/* Form */}
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6 text-left md:hidden"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white text-lg">NAME*</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder=""
                                            {...field}
                                            className="bg-transparent border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder:text-gray-300 focus:border-[#CCFF00] focus-visible:ring-0"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-300" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white text-lg">eMail*</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder=""
                                            {...field}
                                            className="bg-transparent border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder:text-gray-300 focus:border-[#CCFF00] focus-visible:ring-0"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-300" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="interest"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white text-lg mb-4 block">
                                        What interests YOU?*
                                    </FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="grid grid-cols-3 gap-3"
                                        >
                                            {/* correct border color and select color */}
                                            <div className="relative">
                                                <RadioGroupItem
                                                    value="coaching"
                                                    id="coaching"
                                                    className="sr-only"
                                                />
                                                <label
                                                    htmlFor="coaching"
                                                    className={`cursor-pointer block py-3 px-2 border border-[#FA6609] rounded-lg text-center transition-colors text-sm ${field.value === "coaching"
                                                        ? "bg-[#FA6609] text-black"
                                                        : "text-white hover:bg-[#FA6609] hover:text-black"
                                                        }`}
                                                >
                                                    <img
                                                        src="/shweta/assets/btn/radioitem1.png"
                                                        alt="coaching"
                                                        className="w-12 mx-auto opacity-50 pb-2"
                                                    />
                                                    1-on-1
                                                    <br />
                                                    Coaching
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <RadioGroupItem
                                                    value="alignment"
                                                    id="alignment"
                                                    className="sr-only"
                                                />
                                                <label
                                                    htmlFor="alignment"
                                                    className={`cursor-pointer block py-3 px-2 border border-[#CCFF00] rounded-lg text-center transition-colors text-sm ${field.value === "alignment"
                                                        ? "bg-[#CCFF00] text-black"
                                                        : "text-white hover:bg-[#CCFF00] hover:text-black"
                                                        }`}
                                                >
                                                    <img
                                                        src="/shweta/assets/btn/radioitem2.png"
                                                        alt="coaching"
                                                        className="w-12 mx-auto opacity-50 pb-2"
                                                    />
                                                    C-Suite
                                                    <br />
                                                    Alignment
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <RadioGroupItem
                                                    value="keynote"
                                                    id="keynote"
                                                    className="sr-only"
                                                />
                                                <label
                                                    htmlFor="keynote"
                                                    className={`cursor-pointer block py-3 px-2 border border-[#FFCC00] rounded-lg text-center transition-colors text-sm ${field.value === "keynote"
                                                        ? "bg-[#FFCC00] text-black"
                                                        : "text-white hover:bg-[#FFCC00] hover:text-black"
                                                        }`}
                                                >
                                                    <img
                                                        src="/shweta/assets/btn/radioitem3.png"
                                                        alt="coaching"
                                                        className="w-12 mx-auto opacity-50 pb-2"
                                                    />
                                                    Keynote &<br />
                                                    Webinars
                                                </label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage className="text-red-300" />
                                </FormItem>
                            )}
                        />

                        <div className="pt-6 flex items-center justify-center">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#CCFF00] text-black font-bold text-lg py-6 rounded-full hover:bg-[#CCFF00] active:bg-[#CCFF00] active:scale-105 transition-all duration-300"
                            >
                                {isSubmitting ? "Submitting..." : "Check availability"}
                                {!isSubmitting && (
                                    <img
                                        src="/shweta/assets/double_arrow_yellow.png"
                                        alt="arrow"
                                        className="w-3 h-3 filter grayscale invert"
                                    />
                                )}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
}
