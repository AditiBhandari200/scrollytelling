"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CarouselApi } from "@/components/ui/carousel";
import { formSchema } from "./constants";

export function useCarouselControl() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return { api, setApi, current };
}

export function useShwetaForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/shweta-inquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Show success message
                alert(
                    "Thank you for your inquiry! Please check your email for confirmation. Shweta will get back to you within 24 hours."
                );

                // Reset form
                form.reset();
            } else {
                // Show error message
                alert(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return { form, onSubmit, isSubmitting };
}

export function useBiographyClipboard(biographyText: string) {
    const copyBioToClipboard = async () => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(biographyText);
                alert("Biography copied to clipboard!");
            } else {
                throw new Error("Clipboard API not supported");
            }
        } catch (err: unknown) {
            console.error("Failed to copy text: ", err);
            // Fallback method for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = biographyText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            alert("Biography copied to clipboard!");
        }
    };

    return { copyBioToClipboard };
}
