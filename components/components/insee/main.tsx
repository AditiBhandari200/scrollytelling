"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";
import Image from "next/image";
import {
  MessageSquareText,
  FileQuestion,
  FileChartColumnIncreasing,
  ScrollText,
  Brain,
  PencilLine,
  TimerReset,
  ArrowUpWideNarrow,
} from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const APP_STORE_URL = "https://apps.apple.com/in/app/insee-ai/id6746478684";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.leadlikeyou.app";


/*------- Hero -------*/
function Hero() {
  return (
    <section className="relative pt-6">
      <div className="mx-auto mb-6 flex w-11/12 flex-1 flex-col gap-4 sm:mb-0 sm:max-w-[1200px] sm:flex-row sm:gap-0">
        <div className="flex flex-1 flex-col items-center justify-center gap-2 sm:min-w-[400px] sm:gap-4">
          <div className="relative flex w-full flex-1 items-center justify-center sm:hidden">
            <HeroImage />
          </div>
          <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
            <h1 className="text-4xl font-extrabold text-[var(--purple900)]">
              InSee.AI
            </h1>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-color)] leading-tight">
              Beyond information.
              <br className="hidden sm:block" />
              Toward transformation.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-color)] max-w-xl">
              Your Personal AI Coach To Unlock Clarity, Habits, And Growth That
              Lasts.
            </p>
            <div className="mt-6 hidden w-full sm:flex">
              <Buttons />
            </div>
          </div>
        </div>
        <div className="relative hidden items-center justify-center sm:flex sm:flex-1">
          <HeroImage />
        </div>
        <div className="sm:hidden mt-6 flex w-full justify-center">
          <Buttons />
        </div>
      </div>
    </section>
  );
}

function Buttons() {
  const buttonClasses = `
    !w-auto
    !bg-[var(--purple900)] hover:!bg-[var(--purple800)]
    !shadow-md !border-0
    focus:!outline-none focus:!ring-2 focus:!ring-offset-2 focus:!ring-[var(--purple800)]
  `;
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-8">
      <GooglePlayButton
        url={PLAY_STORE_URL}
        theme="dark"
        className={buttonClasses}
      />
      <AppStoreButton
        url={APP_STORE_URL}
        theme="dark"
        className={buttonClasses}
      />
    </div>
  );
}

function HeroImage() {
  return (
    <Image
      src="/insee/banner.png"
      alt="App Demo"
      width={360}
      height={600}
      className="h-auto w-[240px] sm:w-[300px] md:w-[360px] object-contain"
      priority
    />
  );
}

/*------- WhyDifferent -------*/
type Feature = { id: string; icon: JSX.Element; title: string; desc: string };

const features: Feature[] = [
  {
    id: "clarity",
    icon: <Brain className="h-11 w-11 text-[var(--purple900)]" aria-hidden />,
    title: "Clarity that sticks",
    desc: "Simple, science-backed conversations that unlock real insights.",
  },
  {
    id: "visible",
    icon: (
      <PencilLine className="h-11 w-11 text-[var(--purple900)]" aria-hidden />
    ),
    title: "Your growth, visible",
    desc: "Weekly progress reports that show how you are growing as a person, not just what you’ve completed.",
  },
  {
    id: "habits",
    icon: (
      <ArrowUpWideNarrow
        className="h-11 w-11 text-[var(--purple900)]"
        aria-hidden
      />
    ),
    title: "Micro-habits that matter",
    desc: "Small daily actions that create deep, lasting transformation.",
  },
  {
    id: "independent",
    icon: (
      <TimerReset className="h-11 w-11 text-[var(--purple900)]" aria-hidden />
    ),
    title: "Be independent, not dependent",
    desc: "Solve challenges yourself with guided reflection, not passive content.",
  },
];

function WhyDifferent() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section className="relative">
      <div className="mx-auto w-12/12 max-w-[1200px] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-12">
          <WhyDifferentText />
          <div className="md:col-span-7">
            {isMobile ? (
              <Carousel
                plugins={[Autoplay({ delay: 2500 })]}
                opts={{ loop: true }}
                className="w-full "
              >
                <CarouselContent>
                  {features.map((f) => (
                    <CarouselItem key={f.id} className="basis-full flex justify-center p-6">
                      <FeatureCard {...f} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                {features.map((f) => (
                  <FeatureCard key={f.id} {...f} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyDifferentText() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [selectedStore, setSelectedStore] = useState<'ios' | 'android'>('ios');

  return (
    <div className="md:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
      <h2
        className="text-4xl font-extrabold leading-tight text-[var(--text-color)] 
        bg-[url('/insee/bgb2.png')] bg-no-repeat bg-cover bg-center p-6 rounded-lg"
      >
        <br />
        Why InSee.AI is
        <br />
        Different
      </h2>
      {!isMobile && (
        <div className="mt-8 flex flex-col items-center">
          <Image
            src={selectedStore === 'ios' ? '/insee/ios_qr.png' : '/insee/android_qr.png'}
            alt={`Scan the QR to download InSee.AI from ${selectedStore === 'ios' ? 'App Store' : 'Google Play'}`}
            width={290}
            height={310}
            className="w-[220px] sm:w-[290px] h-auto rounded-md"
            sizes="(min-width: 640px) 290px, 220px"
          />

          {/* Switch Component */}
          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center bg-white rounded-full p-1 shadow-md border border-gray-200">
              <button
                onClick={() => setSelectedStore('ios')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selectedStore === 'ios'
                  ? 'bg-[var(--purple900)] text-white shadow-sm'
                  : 'text-[var(--purple900)] hover:bg-gray-50'
                  }`}
              >
                iOS
              </button>
              <button
                onClick={() => setSelectedStore('android')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selectedStore === 'android'
                  ? 'bg-[var(--purple900)] text-white shadow-sm'
                  : 'text-[var(--purple900)] hover:bg-gray-50'
                  }`}
              >
                Android
              </button>
            </div>
          </div>

          {/* Scan to Download Text */}
          <p className="mt-3 text-sm font-medium text-[var(--text-color)] opacity-80">
            Scan to download
          </p>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, desc }: Feature) {
  return (
    <div className="flex items-start gap-4">
      <span className="shrink-0">{icon}</span>
      <div>
        <h3 className="text-2xl font-semibold ">
          {title}
        </h3>
        <p className="mt-2 text-[17px] leading-7 ">
          {desc}
        </p>
      </div>
    </div>
  );
}
/*------- WhatYouGet -------*/

type PillItem = { id: string; icon: JSX.Element; label: string; angle: number };
const PILLS: PillItem[] = [
  { id: "coach", icon: <MessageSquareText className="h-5 w-5 text-[var(--purple900)]" />, label: "Chatbot Coach", angle: 130 },
  { id: "tracker", icon: <MessageSquareText className="h-5 w-5 text-[var(--purple900)]" />, label: "Commitment Tracker", angle: 20 },
  { id: "reports", icon: <FileChartColumnIncreasing className="h-5 w-5 text-[var(--purple900)]" />, label: "Weekly Growth Reports", angle: -20 },
  { id: "personality", icon: <FileQuestion className="h-5 w-5 text-[var(--purple900)]" />, label: "Personality Analysis & Report", angle: 180 },
  { id: "journal", icon: <ScrollText className="h-5 w-5 text-[var(--purple900)]" />, label: "Smart Journal", angle: 230 },
];

function WhatYouGet() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const size = isLg ? 500 : 440;
  const radius = isLg ? 300 : 240;

  return (
    <section className="relative py-12">
      <div className="mx-auto w-full max-w-[1200px] px-4">

        <div className="sm:mb-20  text-center">
          <h2 className="text-4xl font-extrabold text-[var(--text-color)] leading-tight">What You Get</h2>
          <p className="mt-2 text-base sm:text-lg text-[var(--text-color)]">Your clarity, growth, and change start here.</p>
        </div>

        {isMobile ? (
          <>
            <div className="flex justify-center">
              <Image src="/insee/banner3.png" alt="Stage Banner" width={420} height={420} priority className="w-[320px] sm:w-[380px] h-auto" />
            </div>
            <div className="pt-6 px-4">
              <Carousel plugins={[Autoplay({ delay: 2500 })]} opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {PILLS.map((p) => (
                    <CarouselItem key={p.id} className="basis-full pb-12">
                      <div className="flex justify-center px-2">
                        <PillChip {...p} className="w-[90%] max-w-[420px]" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </>
        ) : (
          <div className="relative ">
            <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
              <Image src="/insee/banner3.png" alt="Stage Banner" width={640} height={640} priority className="mx-auto w-[500px] lg:w-[640px] h-auto object-contain" />
            </div>

            <div className="relative mx-auto" style={{ width: size, height: size }}>
              {PILLS.map((p) => (
                <div
                  key={p.id}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${p.angle}deg) translate(${radius}px) rotate(${-p.angle}deg) translate(-52%, -52%)`,
                  }}
                >
                  <PillChip {...p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PillChip({ icon, label, className = "" }: PillItem & { className?: string }) {
  return (
    <div className={`flex items-center gap-3 rounded-xl md:bg-white md:shadow-[0_14px_40px_rgba(0,0,0,0.15)] bg-[#6800870D] px-5 py-3  max-w-full sm:max-w-[400px] whitespace-normal sm:whitespace-nowrap ${className}`} >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F2E7FF]">
        {icon}
      </span>
      <span className="font-extrabold text-[var(--purple900)] uppercase">{label}</span>
    </div>
  );
}


/*------- Testimonials -------*/
type Testimonial = {
  quote: string;
  name: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I recently tried the InSee app chatbot and I must say it feels like having a personal coach by my side. In today’s world, it’s not easy to find real coaches when you need them, but this chatbot is always available, without the need for appointments or waiting. What I love most is that it really tries to understand me. What I want, what I already know, and where I stand. It is simple, handy, and truly supportive. I find the concept exciting and very relevant for this era. I genuinely loved the experience.",
    name: "Sai Sangeetha – L&T",
  },
  {
    quote:
      "The application enables users to develop a deeper understanding of their leadership strengths while functioning as an effective self-coaching tool. Its interactive features and intuitive user interface are designed to support reflective practice, enhance self-awareness, and foster leadership growth.",
    name: "Yogesh Deo",
  },
  {
    quote:
      "I tend to use the InSee app as a reflection tool and a 24×7 coach, that fits in my pocket. I appreciate the mix of science, tech and smart design that actually helps me tackle daily challenges. Moreover, the dynamic team's efforts reassure me that this app will keep evolving. I look forward to incorporating InSee in a deeper way, as a personalised development tool.",
    name: "Tanvi Prakash – L&T, Harvard",
  },
];
function Testimonials() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section className="relative py-16 ">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-[var(--text-color)] leading-tight">
            Testimonials
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[var(--text-color)]">
            Hear what our users are saying about InSee.AI
          </p>
        </div>

        {isMobile ? (
          <Carousel
            plugins={[Autoplay({ delay: 3500 })]}
            opts={{ loop: true }}
            className="w-full [&>div]:overflow-visible"
          >
            <CarouselContent>
              {TESTIMONIALS.map((t, i) => (
                <CarouselItem key={i} className="basis-full pb-8">
                  <TestimonialCard {...t} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="grid grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
function TestimonialCard({ quote, name }: Testimonial) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.05)] p-6 h-full">
      <p className="text-[17px] leading-relaxed text-gray-700 italic">“{quote}”</p>
      <div className="mt-4 text-sm font-bold text-[var(--purple900)]">{name}</div>
    </div>
  );
}

/* ----- ScienceCTA -------*/
function ScienceCTA() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-11/12 max-w-[1200px]">
        <div className="relative overflow-hidden rounded-2xl bg-[#680187] px-6 py-10 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-0" />
          <div className="relative grid grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2">
            <ScienceCTAText />
            <ScienceCTAImage />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScienceCTAText() {
  return (
    <div className="text-white/95">
      <p className="text-xl sm:text-2xl leading-relaxed">
        Built by psychologists, coaches, and neuroscience experts at
        <span className="font-extrabold"> Invincible YOU</span>, InSee.AI
        combines behavioral science, energy management principles, and
        coaching psychology to help you not just think differently, but live
        differently.
      </p>
      <div className="mt-7 flex flex-wrap gap-4">
        <a
          href={APP_STORE_URL}
          className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-[#5A1A96] shadow-md transition hover:shadow-lg"
        >
          Download for iOS
        </a>
        <a
          href={PLAY_STORE_URL}
          className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-[#5A1A96] shadow-md transition hover:shadow-lg"
        >
          Download for Android
        </a>
      </div>
    </div>
  );
}

function ScienceCTAImage() {
  return (
    <div className="flex items-center justify-center md:justify-end">
      <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px]">
        <Image
          src="/insee/cardbanner.png"
          alt="Neuroscience inspired"
          fill
          className="object-contain"
          sizes="(min-width: 768px) 340px, (min-width: 640px) 280px, 220px"
        />
      </div>
    </div>
  );
}

/*------- Page -------*/
export default function Main() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <Header />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <WhyDifferent />
        <WhatYouGet />
        <Testimonials />
        <ScienceCTA />
      </main>
      <Footer />
    </div>
  );
}
