"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
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
import { Button } from "../ui/button";
import { AppContext } from "@/contexts/app-context-provider";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BsShieldFillCheck } from "react-icons/bs";
import Link from "next/link";
import Recaptcha, { ReCAPTCHA } from "react-google-recaptcha";
import {
  FaInstagram,
  FaLinkedin,
  FaRegHandPointer,
  FaSpinner,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

//6Lep1oYqAAAAAGMJgM2i-QEB2BwkwCbwA2gOw3f9

// ==============================
// Contact Form
// ==============================

type communicationPreference = {
  id: "email" | "phone" | "whatsapp";
  label: "Email" | "Phone Call" | "Whatsapp";
};

const communicationPreferences: communicationPreference[] = [
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone Call" },
  { id: "whatsapp", label: "Whatsapp" },
];

const contactFormSchema = z.object({
  fname: z.string().min(1).default(""),
  lname: z.string().min(1).default(""),
  email: z.string().email().default(""),
  phone: z.string().min(1).max(15).default(""),
  communicationPreference: z.enum([
    communicationPreferences[0].id,
    communicationPreferences[1].id,
    communicationPreferences[2].id,
  ]),
  message: z.string().min(1).default(""),
});

const SubmittedDialog = ({
  submitted,
  setSubmitted,
}: {
  submitted: boolean;
  setSubmitted: React.Dispatch<
    React.SetStateAction<"submitting" | "submitted" | "error" | "reset">
  >;
}) => {
  return (
    <Dialog open={submitted} onOpenChange={() => setSubmitted("reset")}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thank you!</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Your message has been received, and we will get back to you shortly.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const ContactForm = (
  communicationPreferences: communicationPreference[],
  recaptchaValue: string | null,
  recaptchaRef: React.RefObject<ReCAPTCHA>,
  setRecaptchaValue: React.Dispatch<React.SetStateAction<string | null>>,
) => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const [formStatus, setFormStatus] = useState<
    "submitting" | "submitted" | "error" | "reset"
  >("reset");

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    if (!recaptchaValue) {
      recaptchaRef.current?.execute();
      return;
    }

    setFormStatus("submitting");
    try {
      const response = await fetch("https://muwn59.buildship.run/contact-us", {
        method: "POST",
        body: new URLSearchParams(data).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFormStatus("submitted");
      // Reset the reCAPTCHA after successful submission
      recaptchaRef.current?.reset();
      setRecaptchaValue(null);
    } catch (error) {
      setFormStatus("error");
      console.log(error);
      // Reset the reCAPTCHA on error
      recaptchaRef.current?.reset();
      setRecaptchaValue(null);
    }
  };

  const formLabelStyle = "text-base font-semibold";

  return (
    <div className="my-16 flex w-10/12 max-w-[1200px] flex-col">
      <div className="hidden sm:block">{banner()}</div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8 sm:bg-[#68008708] sm:p-12"
        >
          <div className="flex flex-col gap-8 sm:flex-row">
            <FormField
              control={form.control}
              name="fname"
              render={({ field }) => (
                <FormItem className="sm:basis-1/2">
                  <FormLabel className={formLabelStyle}>First Name*</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      className="h-[40px] border-none bg-white shadow-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lname"
              render={({ field }) => (
                <FormItem className="sm:basis-1/2">
                  <FormLabel className={formLabelStyle}>Last Name*</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      className="h-[40px] border-none bg-white shadow-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-8 sm:flex-row">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="sm:basis-1/2">
                  <FormLabel className={formLabelStyle}>Email*</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      className="h-[40px] border-none bg-white shadow-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="sm:basis-1/2">
                  <FormLabel className={formLabelStyle}>Phone*</FormLabel>
                  <FormControl>
                    <PhoneInput
                      preferredCountries={["in"]}
                      country={"in"}
                      enableSearch
                      inputClass="bg-white"
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="communicationPreference"
            render={({ field }) => (
              <FormItem className="gap-4">
                <FormLabel className={formLabelStyle}>
                  Please select your preferred mode of communication*
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    suppressHydrationWarning
                    className="flex flex-col gap-2 sm:flex-row sm:gap-8"
                  >
                    {communicationPreferences.map((preference) => (
                      <FormItem
                        key={preference.id}
                        className="flex flex-row items-center gap-2 space-y-0"
                      >
                        <FormControl className="max-content">
                          <RadioGroupItem
                            value={preference.id}
                            id={preference.id}
                          />
                        </FormControl>
                        <FormLabel
                          className={formLabelStyle}
                          htmlFor={preference.id}
                        >
                          {preference.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={formLabelStyle}>
                  What would you like to explore?*
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    className="border-none bg-white"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex w-full justify-center gap-2 sm:hidden">
            {yourDataIsSafeWithUs()}
          </div>
          <Button
            type="submit"
            className="mx-auto w-1/2 bg-[--purple900] py-6 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-[--purple800] active:scale-95 active:bg-[--purple800] sm:w-1/3"
            size="lg"
            disabled={formStatus === "submitting"}
          >
            {formStatus === "submitting" ? (
              <>
                <FaSpinner className="h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
      <SubmittedDialog
        submitted={formStatus === "submitted"}
        setSubmitted={setFormStatus}
      />
    </div>
  );
};

// ==============================
// Banner
// ==============================

const banner = () => {
  return (
    <div className="my-12 flex w-full flex-col items-center justify-center gap-4 px-8 text-center sm:items-start sm:px-0 sm:text-left">
      <h1 className="text-3xl font-semibold text-[--purple900]">
        Get In Touch With Us
      </h1>
      <p className="text-lg text-[--text-color]">
        Discover how we can support your journey toward transformative growth.
        Complete the form below, and we&apos;ll be in touch soon!
      </p>
    </div>
  );
};

// ==============================
// Other ways to contact us
// ==============================

type OtherWaysToContactUsItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

const phoneNumber = "+91 8147016714";
const email = "mary@invincibleyou.world";
const instagram = "https://www.instagram.com/invincibleyou.official/";
const linkedin = "https://www.linkedin.com/company/invincibleyouworld";
const youtube = "https://www.youtube.com/@invincible-you.official";

const OtherWaysToContactUsItem = ({
  icon,
  title,
  description,
  link,
}: OtherWaysToContactUsItemProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 sm:hidden">
      {icon}
      <span className="text-xl text-[--text-color]">{title}</span>
      <div className="h-[4px] w-[60px] rounded-full bg-[--purple900]"></div>
      <Link href={link} className="text-lg font-semibold text-[--text-color]">
        {description}
      </Link>
    </div>
  );
};

const OtherWaysToContactUsItemDesktop = ({
  icon,
  title,
  description,
  link,
}: OtherWaysToContactUsItemProps) => {
  return (
    <div className="hidden w-full flex-row items-start justify-center gap-4 sm:flex">
      {icon}
      <div className="flex flex-1 flex-col items-start justify-center gap-2">
        <span className="text-xl text-[--text-color]">{title}</span>
        <div className="h-[4px] w-[60px] rounded-full bg-[--purple900]"></div>
        <Link href={link} className="text-lg font-semibold text-[--text-color]">
          {description}
        </Link>
      </div>
    </div>
  );
};

const OtherWaysToContactUs = () => {
  return (
    <div className="my-16 flex flex-col items-center justify-center gap-12 sm:w-full sm:items-start">
      <h1 className="text-2xl font-semibold text-[--text-color] sm:hidden">
        Other ways to contact us
      </h1>

      <OtherWaysToContactUsItem
        icon={<HiOutlinePhone size={26} />}
        title="Call us"
        description={phoneNumber}
        link={`tel:${phoneNumber}`}
      />
      <OtherWaysToContactUsItemDesktop
        icon={<HiOutlineMail size={26} />}
        title="Write to us"
        description={email}
        link={`mailto:${email}`}
      />
      <OtherWaysToContactUsItemDesktop
        icon={<HiOutlinePhone size={26} />}
        title="Call us"
        description={phoneNumber}
        link={`tel:${phoneNumber}`}
      />
      <OtherWaysToContactUsItem
        icon={<HiOutlineMail size={26} />}
        title="Write to us"
        description={email}
        link={`mailto:${email}`}
      />
      <div className="hidden w-full items-start justify-center gap-4 sm:flex">
        <div className="flex basis-1/3 items-center justify-end gap-2 sm:basis-auto">
          <FaRegHandPointer size={26} />
        </div>
        <div className="flex flex-1 flex-col items-start gap-2">
          <span className="text-xl text-[--text-color]">Follow us</span>
          <div className="h-[4px] w-[60px] rounded-full bg-[--purple900]"></div>
          <div className="flex gap-4">
            <Link href={instagram} target="_blank">
              <FaInstagram size={24} />
            </Link>
            <Link href={linkedin} target="_blank">
              <FaLinkedin size={24} />
            </Link>
            <Link href={youtube} target="_blank">
              <FaYoutube size={26} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==============================
// Your Data is safe with us
// ==============================

const yourDataIsSafeWithUs = () => {
  return (
    <div className="flex flex-row gap-2 sm:gap-4">
      <BsShieldFillCheck size={30} className="sm:hidden" />
      <BsShieldFillCheck size={45} className="hidden sm:block" />
      <div className="flex flex-col items-start justify-center">
        <span className="text-lg font-semibold">Your Data is safe</span>
        <span className="text-md">
          Please refer to our{" "}
          <Link href="/privacy" className="text-blue-500 underline">
            Privacy Policy
          </Link>{" "}
          to understand how we safeguard and handle your data
        </span>
      </div>
    </div>
  );
};

// ==============================
// Right Side
// ==============================

const RightSide = () => {
  return (
    <div className="hidden basis-1/3 gap-4 sm:flex sm:flex-col sm:items-center sm:justify-center">
      <Image src="/cu1.png" alt="Contact us" width={250} height={250} />
      <OtherWaysToContactUs />
      {yourDataIsSafeWithUs()}
    </div>
  );
};

export default function ContactUs() {
  const { setActiveRoute } = useContext(AppContext);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  useEffect(() => {
    setActiveRoute({ id: "/contact-us", name: "Contact us" });
    recaptchaRef.current?.execute();
  }, [setActiveRoute]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full sm:hidden">{banner()}</div>
        <div className="flex w-full flex-col items-center justify-center bg-[#68008708] sm:w-11/12 sm:max-w-[1200px] sm:flex-row sm:gap-12 sm:bg-white">
          {ContactForm(
            communicationPreferences,
            recaptchaValue,
            recaptchaRef,
            setRecaptchaValue,
          )}
          <RightSide />
        </div>
      </div>
      <div className="w-full sm:hidden">
        <OtherWaysToContactUs />
      </div>
      <Recaptcha
        ref={recaptchaRef}
        sitekey={RECAPTCHA_SITE_KEY!}
        size="invisible"
        badge="bottomleft"
        onChange={setRecaptchaValue}
        onExpired={() => {
          setRecaptchaValue(null);
          recaptchaRef.current?.reset();
        }}
      />
      <Footer />
    </div>
  );
}
