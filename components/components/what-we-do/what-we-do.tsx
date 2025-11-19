"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AppContext } from "@/contexts/app-context-provider";
import CarouselDots from "../carousel/carousel-dots";

const Images = [
  {
    id: "Leaders",
    src: "/wwd1.png",
    alt: "Image for Unstoppable Leaders",
    text: "Unstoppable Leaders",
    color: "#CC0000",
  },
  {
    id: "Teams",
    src: "/wwd2.png",
    alt: "Image for Unstoppable Teams",
    text: "Unstoppable Teams",
    color: "#680087",
  },
];

const Cards = [
  {
    title: "IGNITE",
    subtitle: "Leadership Identity",
    description: [
      "Leadership identity is the foundation of success",
      "Our 'Own Your Steel' program specifically empowers women leaders to shape their identity and destiny",
      "Self-awareness of their  core identity unlocks  full potential for growth",
      "Our unique approach ensures high-impact leadership in teams and individuals",
    ],
    desc_mobile: [
      "Leadership identity fuels success; drives business impact",
      "The 'Own Your Steel' program empowers women leaders to shape their identity and destiny",
      "Our neuroscience based approach sparks unstoppable growth in leaders and teams",
    ],
    footer: "See our results",
    type: "IGNITE",
    color: "#CC0000",
  },
  {
    title: "ELEVATE",
    subtitle: "Leadership Potential",
    description: [
      "Potential is limitless but needs a change agent",
      "We identify leaders ready to elevate their impact",
      "Our customized  journeys help develop core leadership competencies",
      "Our unique approach drives deep, lasting change, delivering better results, engaged teams, and continuous innovation, guaranteeing future success",
    ],
    desc_mobile: [
      "Leadership potential is limitless but needs a change agent",
      "Our unique approach enables leaders to elevate impact",
      "This drives deep change, delivering better results, and innovation guaranteeing future success",
    ],
    footer: "See our results",
    type: "ELEVATE",
    color: "#CC0000",
  },
  {
    title: "ALIGN",
    subtitle: "Teams",
    description: [
      "Leadership teams often struggle to balance collective accountability and cohesion",
      "Over-focus on accountability creates a toxic, low-trust environment; over-focus on relationships impedes performance",
      "We help leadership teams internalize strategy, aligning on both performance expectations and high-trust relationships",
      "Our approach fosters accountability and trust, driving cohesive, high-performing teams",
    ],
    desc_mobile: [
      "Leadership teams struggle to balance results and relationships",
      "Over-focus on accountability hurts trust; over-focus on relationships lowers performance",
      "We help teams align strategy with strong trust and results",
    ],
    footer: "See our results",
    type: "ALIGN",
    color: "#680087",
  },
  {
    title: "AMPLIFY",
    subtitle: "Inclusion",
    description: [
      "Openness is often blocked by assumptions and a lack of awareness",
      "We believe all individuals can be open, curious, and welcoming, not defensive or hostile",
      "Our vision is a diverse, humble, playful, and inclusive team, united by uniqueness",
      "Our approach challenges unconscious bias, empowering participants to own their culture, behaviors, and progress",
    ],
    desc_mobile: [
      "Openness is often blocked by assumptions and a lack of awareness",
      "We believe everyone can be open, curious, and welcoming",
      "Our vision: a humble, diverse, happy team, united by uniqueness",
      "Our approach shifts mindsets, freeing people to own their choices and be open to other choices",
    ],
    footer: "See our results",
    type: "AMPLIFY",
    color: "#680087",
  },
];

const CarouselCards = [
  {
    id: "1",
    title: "EXPLORATIVE",
    subtitle:
      "We facilitate leaders to find and face the fears or threat responses that hold them back",
    img: "/wwd3.png",
  },
  {
    id: "2",
    title: "EXPERIENTIAL",
    subtitle: "Through immersive experiences, we kindle clarity, revealing room for renewal and revival",
    img: "/wwd4.png",
  },
  {
    id: "3",
    title: "EXPRESSIONAL",
    subtitle: "We free fears and insecurities to foster authentic self expression",
    img: "/wwd5.png",
  },
  {
    id: "4",
    title: "EXPONENTIAL",
    subtitle:
      "Once transformation starts within, intrinsic motivation  fuels endless growth",
    img: "/wwd6.png",
  },
];

// ========== Custom Card Components ==========

const CardContent = (list1: string[], list2: string[]): React.ReactNode => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="flex-1 list-disc space-y-2 pl-6">
        {list1.map((item, index) => (
          <li key={index} className="hidden leading-7 sm:list-item">
            {item}
          </li>
        ))}
      </ul>
      <ul className="mx-2 flex-1 list-disc space-y-2 px-4 pl-6">
        {list2.map((item, index) => (
          <li key={index} className="leading-7 sm:hidden">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CustomCardHeader = (
  title: string,
  subtitle: string,
  color: string,
): React.ReactNode => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:items-start">
      <div
        className="text-2xl font-semibold tracking-widest"
        style={{ color: color }}
      >
        <span className="text-3xl">{title.charAt(0).toUpperCase()}</span>
        {title.slice(1)}
      </div>
      <div className="text-xl">{subtitle}</div>
    </div>
  );
};

const CustomCardFooter = (
  footer: string,
  color: string,
  type: string,
): React.ReactNode => {
  return (
    <Link
      href={`/winning-solutions?type=${type}`}
      className="text-md flex flex-row items-center justify-center font-bold sm:text-lg"
      style={{ color: color }}
    >
      {footer} <MdKeyboardArrowRight className="text-lg" />
    </Link>
  );
};

const CustomCard = (card: (typeof Cards)[number]): React.ReactNode => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:items-start sm:gap-8">
      {CustomCardHeader(card.title, card.subtitle, card.color)}
      {CardContent(card.description, card.desc_mobile)}
      {CustomCardFooter(card.footer, card.color, card.type)}
    </div>
  );
};

const CardContainer = (
  cards: typeof Cards,
  type: "one" | "two",
): React.ReactNode => {
  return (
    <div
      data-type={type}
      className="flex w-full items-center justify-center gap-12 py-16 data-[type='one']:bg-[#4d4d4d0D] data-[type='two']:bg-[#6800870D] sm:py-20 sm:data-[type='one']:bg-[#4d4d4d08] sm:data-[type='two']:bg-gradient-to-b sm:data-[type='two']:from-white sm:data-[type='two']:to-[#fdf2ff]/50"
    >
      <div className="flex w-11/12 flex-row items-center justify-center gap-12 sm:max-w-[1200px] sm:items-start">
        <div className="sticky top-[90px] hidden h-full sm:flex sm:flex-1">
          {type === "one"
            ? ImageContainer(Images, 250, 250)
            : ImageContainer(Images.slice(1), 300, 300)}
        </div>
        <div className="flex flex-col items-center justify-center gap-12 sm:flex-1 sm:gap-20">
          {CustomCard(cards[0])}
          <div className="w-1/2 border-[1px] border-[#4d4d4d] sm:hidden"></div>
          {CustomCard(cards[1])}
        </div>
      </div>
    </div>
  );
};

// ========== Image Components ==========

const ImageTextBox = (
  title: string,
  text: string,
  color: string,
): React.ReactNode => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:items-start sm:gap-4">
      <div
        className="text-lg font-semibold tracking-widest"
        style={{ color: color }}
      >
        {text}
      </div>
      <div className="text-2xl font-semibold sm:text-5xl">{title}</div>
    </div>
  );
};

const ImageDiv = (
  src: string,
  alt: string,
  width: number,
  height: number,
): React.ReactNode => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

const ImageContainer = (
  images: typeof Images,
  height: number,
  width: number,
): React.ReactNode => {
  return (
    <div className="flex w-11/12 flex-col items-center justify-center gap-6 sm:flex-1 sm:items-start sm:gap-6">
      {ImageDiv(images[0].src, images[0].alt, height, width)}
      {ImageTextBox(images[0].text, "We Unleash", images[0].color)}
    </div>
  );
};

// ========== Carousel Components ==========

const CarouselCard = (
  card: (typeof CarouselCards)[number],
): React.ReactNode => {
  return (
    <Card className="flex h-full w-full flex-col items-center justify-center rounded-[50px] border-2 border-[#4d4d4d1A] p-6 shadow-inner transition-all duration-300 ease-in-out sm:h-auto sm:w-[240px] sm:border-none sm:shadow-[0_0_15px_0_rgba(0,0,0,0.1)] sm:hover:scale-105">
      <CardHeader className="flex items-center justify-center gap-6 text-2xl font-semibold tracking-wider text-[var(--purple900)]">
        <Image src={card.img} alt={card.title} width={80} height={0} />
        {card.title}
      </CardHeader>
      <CardDescription
        data-number={card.id}
        className="text-center text-lg data-[number='3']:max-w-[150px]"
      >
        {card.subtitle}
      </CardDescription>
    </Card>
  );
};

const CarouselSection = (cards: typeof CarouselCards): React.ReactNode => {
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

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-11/12 text-center text-2xl font-semibold tracking-wider text-[var(--purple900)]">
          THE ART AND NEUROSCIENCE OF WHAT WE DO
        </div>
        <div className="w-11/12 text-center text-lg tracking-wider">
          Grounded in growth and guided by research, our interventions spark
          limitless leaps
        </div>
      </div>
      <div className="flex w-screen flex-col items-center justify-center gap-4 sm:hidden">
        <Carousel className="w-3/5" setApi={setApi}>
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index}>{CarouselCard(card)}</CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <CarouselDots items={cards.length} current={current} />
      </div>
    </div>
  );
};

const style = {
  backgroundColor: "#fdf2ff",
};

function WhatWeDo() {
  const { setActiveRoute } = useContext(AppContext);
  useEffect(() => {
    setActiveRoute({ id: "/what-we-do", name: "What we do" });
  }, [setActiveRoute]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      <div
        className="flex w-full flex-col items-center justify-center"
        style={style}
      >
        <div className="my-12 flex w-full justify-center sm:hidden">
          {ImageContainer(Images, 120, 120)}
        </div>
        <div className="w-full">{CardContainer(Cards, "one")}</div>
        <div className="my-12 flex w-full justify-center sm:hidden">
          {ImageContainer(Images.slice(1), 120, 120)}
        </div>
        <div className="w-full">{CardContainer(Cards.slice(2), "two")}</div>
        <div className="my-16 flex w-full flex-col items-center justify-center gap-14 sm:my-28">
          <div>{CarouselSection(CarouselCards)}</div>
          <div className="hidden w-full max-w-[1200px] flex-wrap items-center justify-center gap-8 sm:flex">
            {CarouselCards.map((card, index) => (
              <CarouselCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WhatWeDo;
