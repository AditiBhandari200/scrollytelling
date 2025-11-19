"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useShwetaForm } from "./hooks";

export default function ContactFormSection() {
    const { form, onSubmit, isSubmitting } = useShwetaForm();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className="hidden md:block bg-[#ccff00] py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl font-semibold text-purple-900 mb-2">
                        Schedule a 15 minute call with me
                    </h2>
                </motion.div>

                <Form {...form}>
                    <motion.form
                        onSubmit={form.handleSubmit(onSubmit)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="flex items-end gap-6 justify-between">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="flex-1 max-w-[220px]">
                                        <FormControl>
                                            <Input
                                                placeholder="NAME*"
                                                {...field}
                                                className="bg-[#8fb200] border-0 rounded-full px-4 text-black text-lg placeholder:text-lg placeholder:font-semibold focus-visible:ring-0"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex-1 max-w-[220px]">
                                        <FormControl>
                                            <Input
                                                placeholder="eMail*"
                                                {...field}
                                                className="bg-[#8fb200] border-0 rounded-full px-4 text-black text-lg placeholder:text-lg placeholder:font-semibold focus-visible:ring-0 "
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="interest"
                                render={({ field }) => (
                                    <FormItem className="flex-1 max-w-[250px]">
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="bg-[#8fb200] border-0 rounded-full px-4 text-black focus:ring-0 data-[placeholder]:text-lg data-[placeholder]:font-semibold">
                                                    <SelectValue placeholder="What interests YOU?*" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="">
                                                <SelectItem value="coaching">
                                                    1-on-1 Coaching
                                                </SelectItem>
                                                <SelectItem value="alignment">
                                                    C-Suite Alignment
                                                </SelectItem>
                                                <SelectItem value="keynote">
                                                    Keynote &amp; Webinars
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="bg-white text-purple-900 font-bold text-lg px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 "
                            >
                                {isSubmitting ? "Submitting..." : "Check availability"}
                            </Button>
                        </div>
                    </motion.form>
                </Form>
            </div>
        </section>
    );
}
