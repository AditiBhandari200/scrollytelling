"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppContext } from "@/contexts/app-context-provider";
import { useScroll, MotionValue, useTransform, motion } from "framer-motion";
import useHoverCycle from "@/util/cycle-hover";

// ===============================
// TOP BANNER
// ===============================

const Banner = () => (
  <div className="flex w-10/12 flex-col items-center justify-center gap-4 py-16 sm:max-w-[1200px] sm:py-24">
    <div className="text-center text-3xl font-semibold text-[var(--purple900)] sm:text-4xl">
      The Invincible Evolution
    </div>
    <div className="text-center text-xl sm:text-2xl">
      The journey of infinite steps - started with one idea
    </div>
  </div>
);

// ===============================
// BOX
// ===============================

type ContentItem = {
  id: number;
  year: number;
  yearTitle: string;
  title: string;
  content: string;
  color: string;
};

const contentItems: ContentItem[] = [
  {
    id: 1,
    year: 2019,
    yearTitle: "AN IDEA IS BORN",
    title: "Invincibility: a Choice and Intention.",
    content:
      "The spark that ignited it all—a belief that invincibility isn't just a trait; it's a mindset and an intention. The idea emerged to empower leaders to unlock their limitless potential through transformative experiences. Invincible you was conceived to redefine leadership, starting a movement toward self-mastery and conscious leadership.",
    color: "red",
  },
  {
    id: 2,
    year: 2021,
    yearTitle: "THE JOURNEY BEGINS",
    title: "One Vision, One Founder: The Start of Something Great",
    content:
      'With a powerful belief in leadership transformation, the company launched with a single visionary—the Founder. Armed with the flagship program "Winspire Propel," Invincible you began its mission to transform leadership identity, starting with women leaders at L&T, a global conglomerate.',
    color: "purple",
  },
  {
    id: 3,
    year: 2022,
    yearTitle: "EXPANDING HORIZONS",
    title: "Growing Stronger: A Team of 3 and Expanding Clientele",
    content:
      "The growth journey kicked off—with three passionate team members and a portfolio boasting partnerships with industry leaders like L&T, Walmart, and Diageo. With the deepening impact of leadership transformation, Invincible you became synonymous with growth, resilience, and invincible leadership.",
    color: "purple",
  },
  {
    id: 4,
    year: 2023,
    yearTitle: "EMPOWERING WOMEN, WINNING GOLD",
    title: "Empowering Women, Winning Gold",
    content:
      "A recognition milestone—L&T won the prestigious Brandon Hall Gold Award for its women's leadership program, \"Winspire Propel.\" This achievement was a testament to the power of leadership identity work and the meaningful impact of Invincible you's programs on women's leadership journeys.",
    color: "red",
  },
  {
    id: 5,
    year: 2024,
    yearTitle: "THE YEAR OF ACCELERATION",
    title: "Scaling New Heights: Team of 6 and the Launch of Invincible you",
    content:
      "With a strengthened team of six and an ever-expanding client base of over 25 organizations, Invincible you reached new heights. The Invincible you app was launched, bringing personalized leadership development to everyone's fingertips—ensuring leaders have access to growth anytime and anywhere.",
    color: "purple",
  },
  {
    id: 6,
    year: 2025,
    yearTitle: "TAKING LEADERSHIP DEVELOPMENT GLOBAL",
    title: "Leadership at Every Fingertip: A Global Vision",
    content:
      "With leadership development available at every fingertip through the app and programs, Invincible you strives to build a world where invincibility is not just a choice but a global standard.",
    color: "purple",
  },
];

// YEAR BOX

const YearBox = (yearItem: ContentItem) => (
  <div className="flex flex-col gap-2">
    <div className="flex flex-row items-center gap-2 text-2xl font-semibold sm:text-4xl sm:font-semibold">
      <div
        data-color={yearItem.color}
        className="h-[1rem] w-[1rem] rounded-full bg-gradient-to-tl from-white data-[color=purple]:to-[#680087] data-[color=red]:to-[#CC0000] sm:h-[1.5rem] sm:w-[1.5rem]"
      ></div>
      {yearItem.year}
    </div>
    <div
      data-color={yearItem.color}
      className="text-lg font-semibold data-[color=purple]:text-[var(--purple900)] data-[color=red]:text-[#CC0000] sm:text-2xl"
    >
      {yearItem.yearTitle}
    </div>
  </div>
);

// CONTENT BOX

const styles = {
  contentBox: "sticky top-[20vh] flex w-10/12 sm:w-4/5",
  contentCard:
    "relative origin-top flex flex-1 flex-col gap-2 rounded-md border-[1px] border-[#4d4d4d33] bg-gradient-to-b from-white px-6 py-8 data-[color=purple]:to-[#EBDFEE] data-[color=red]:to-[#EBCACA] sm:rounded-md sm:bg-none sm:px-10 sm:py-16 sm:data-[color=purple]:border-[#DAC2E2] sm:data-[color=purple]:bg-[#F7F2F9] sm:data-[color=red]:bg-[#F7F7F7]",
};

const ContentBox = ({
  contentItem,
  progress,
  range,
  targetScale,
}: {
  contentItem: ContentItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const top = `calc(-5vh + ${contentItem.id * 10}px)`;
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className={styles.contentBox}>
      <motion.div
        data-color={contentItem.color}
        className={styles.contentCard}
        style={{ top: top, scale }}
      >
        <div className="block">
          <YearBox {...contentItem} />
        </div>
        <div className="flex flex-col sm:gap-2">
          <div
            data-color={contentItem.color}
            className="text-lg font-semibold text-[var(--text-color)] sm:text-2xl"
          >
            {contentItem.title}
          </div>
          <div className="text-base sm:text-lg">{contentItem.content}</div>
        </div>
      </motion.div>
    </div>
  );
};

// ===============================
// BOTTOM BOX
// ===============================

type CardItem = {
  id: number;
  title: string;
  content: string;
  image: string;
};

const cardItems: CardItem[] = [
  {
    id: 1,
    title: "POTENTIAL IS INFINITE",
    content:
      "At Invincible you, we believe greatness is yours for the taking. With intention, the limitless potential is unleashed. The right mindset doesn't just expand possibilities—it shatters limits.",
    image: "/potential-is-infinite.svg",
  },
  {
    id: 2,
    title: "ANYONE CAN CHANGE",
    content:
      "At Invincible YOU, we believe in the unfathomable power of Neuroplasticity; everyone is change-ready and coachable. Fear fades when courage and compassion lead.",
    image: "/anyone-can-change.svg",
  },
  {
    id: 3,
    title: "MANY COLORS ONE RAINBOW",
    content:
      "At Invincible you, we see possibilities in every shade. A world where diverse colors and ideas form powerful rainbow arcs—not divisions.",
    image: "/many-colors-one-rainbow.svg",
  },
];

const BottomBoxCard = ({
  title,
  content,
  image,
  isActive,
  inCarousel,
}: CardItem & { isActive?: boolean; inCarousel?: boolean }) => {
  const cardVariants = {
    initial: {
      backgroundColor: "rgba(255,255,255,0)",
    },
    hovered: {
      backgroundColor: "rgba(255,255,255,1)",
    },
  };

  const cardContentVariants = {
    initial: {
      opacity: 0,
    },
    hovered: {
      opacity: 1,
    },
  };

  const AnimatedCardContent = motion(CardContent);
  return (
    <Card
      className="h-full w-full overflow-hidden border-none text-center shadow-none"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isActive ? "hovered" : "initial"}
        whileHover="hovered"
        className="flex h-full flex-1 flex-col items-center justify-start bg-white p-6 sm:h-[400px] sm:bg-[rgba(255,255,255,0)] sm:p-4 sm:backdrop-blur-0"
      >
        <CardHeader className="flex flex-col items-center justify-center sm:min-h-[100px]">
          <CardTitle className="text-xl font-semibold text-[var(--purple900)]">
            {title}
          </CardTitle>
        </CardHeader>

        {inCarousel ? (
          <div className="flex-1 flex-col items-center justify-start text-lg sm:hidden">
            {content}
          </div>
        ) : (
          <AnimatedCardContent
            variants={cardContentVariants}
            initial="initial"
            animate={isActive ? "hovered" : "initial"}
            whileHover="hovered"
            className="flex-1 flex-col items-center justify-start text-lg"
          >
            {content}
          </AnimatedCardContent>
        )}
      </motion.div>
    </Card>
  );
};

const BootomBoxCarousel = () => {
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
    <div className="mt-12 flex w-screen flex-col items-center justify-center gap-6 md:hidden">
      <Carousel className="w-9/12" setApi={setApi}>
        <CarouselContent>
          {cardItems.map((cardItem) => (
            <CarouselItem key={`card_${cardItem.id}`}>
              <BottomBoxCard {...cardItem} isActive={true} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex h-[6px] flex-row items-center justify-center gap-1">
          {cardItems.map((cardItem, index) => (
            <div
              key={cardItem.id}
              data-current={current === index + 1}
              className="h-[6px] w-[6px] rounded-full bg-[#4d4d4d4D] data-[current='true']:bg-[#000]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const INTERVAL = 8000;

const BottomBox = () => {
  const hoveredCard = useHoverCycle({
    cardCount: cardItems.length,
    interval: INTERVAL,
  });
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-[#680087]/5 py-20">
      <div className="mb-12 text-3xl font-semibold text-[var(--purple900)]">
        Our North Stars
      </div>
      <div className="flex w-10/12 flex-col items-center gap-12">
        <div className="flex flex-col gap-2 text-center text-xl sm:max-w-[600px] sm:gap-4">
          <div className="font-semibold">
            “The infinite potential of a person is so spectacular that assisting
            just one to realise this could make your life&apos;s work complete.”
          </div>
          <div>
            <i>&#45; Adriaan Groenewald</i>
          </div>
        </div>
      </div>
      <BootomBoxCarousel />
      <div className="mt-12 hidden w-10/12 flex-row items-center justify-center gap-16 sm:max-w-[1100px] md:flex">
        {cardItems.map((cardItem) => (
          <BottomBoxCard
            key={`b_${cardItem.id}`}
            {...cardItem}
            isActive={hoveredCard === cardItem.id - 1}
          />
        ))}
      </div>
    </div>
  );
};

// ===============================
// DEFAULT COMPONENT
// ===============================

function WhereItBegan() {
  const { setActiveRoute } = useContext(AppContext);
  useEffect(() => {
    setActiveRoute({ id: "/where-it-began", name: "Where it began" });
  }, [setActiveRoute]);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      <Banner />
      <div
        className="mb-36 mt-12 flex w-11/12 flex-col items-center justify-center gap-6 sm:max-w-[1200px] sm:gap-10"
        ref={containerRef}
      >
        {contentItems.map((contentItem) => {
          const targetScale = 1 - (contentItems.length - contentItem.id) * 0.05;
          return (
            <ContentBox
              key={`p_${contentItem.id}`}
              contentItem={contentItem}
              progress={scrollYProgress}
              range={[contentItem.id / contentItems.length, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <BottomBox />
      <Footer />
    </div>
  );
}

export default WhereItBegan;
