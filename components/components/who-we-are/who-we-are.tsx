"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AppContext } from "@/contexts/app-context-provider";
import Link from "next/link";
import { motion, useAnimate } from "motion/react";

const employees = [
  {
    id: 1,
    src: "/shweta.jpg",
    name: "Shweta Kumar",
    role: "Founder & Director",
    linkedin: "https://www.linkedin.com/in/shwetakumarprofile/",
    email: "shweta@invincibleyou.world",
    description:
      "Shweta has more than 25 years of experience, and has worked with clients and companies in India, Africa, Middle East, Latin America in the areas of organizational transformation, leadership capability enhancement and culture change, in her prior roles. She is passionate about the process of transformation at an individual, team and organizational level and specializes in helping leadership teams in the areas of creating desired mindset shifts. She has helped clients across industries in helping their cultures transform as well as enabling their leaders to bring their best. She coaches CEOs, Founders and leaders who seek to change their mindset.",
  },
  {
    id: 2,
    src: "/anindita.svg",
    name: "Anindita Zadoo",
    role: "Head - Consulting and Coaching Solutions",
    linkedin: "https://www.linkedin.com/in/anindita-zadoo-348236157/",
    email: "anindita@invincibleyou.world",
    description:
      "Anindita is a certified Executive and Life Coach with over 300 hours of experience in guiding clients through profound mindset transformations. As a skilled facilitator and small-group coach, she creates impactful sessions that foster deep connections, empowering individuals to embrace change, unlock their true potential, and design fulfilling, purpose-driven lives.",
  },
  {
    id: 3,
    src: "/aishani.svg",
    name: "Aishani Ghosh",
    role: "Senior Consultant - Client Solutions",
    linkedin: "https://www.linkedin.com/in/aishani-ghosh-528500179/",
    email: "aishani@invincibleyou.world",
    description:
      "Aishani, a trauma-informed psychologist and published researcher with the World Health Organization (WHO), brings her expertise to thought leadership. She has been instrumental in shaping the learning experience for Invincible You’s B2B app. Through research-backed solutions and addressing early life experiences, she helps clients achieve meaningful breakthroughs that redefine their leadership journey.",
  },
  {
    id: 4,
    src: "/mary.svg",
    name: "Mary Smitha Jacob",
    role: "Head - Projects",
    linkedin: "https://www.linkedin.com/in/mary-jacob-28317518/",
    email: "mary@invincibleyou.world",
    description:
      "Mary drives organizational success by aligning projects with strategic goals, fostering innovation, and exceeding targets. She ensures measurable outcomes, optimizes resources, and enhances team collaboration. By delivering transformative results and cultivating a culture of excellence, she empowers the organization to achieve sustainable growth and thrive in a competitive landscape.",
  },
  {
    id: 5,
    src: "/vidit.svg",
    name: "Vidit Sirohi",
    role: "Head - Technology and Data Science",
    linkedin: "https://www.linkedin.com/in/viditsirohi/",
    email: "vidit@invincibleyou.world",
    description:
      "Vidit Sirohi is a Software Developer who combines technical expertise with innovative problem-solving. He developed the Invincible YOU website and mobile app, integrating analytics and automation to enhance efficiency. Vidit specializes in turning complex requirements into practical, impactful solutions.",
  },
  {
    id: 6,
    src: "/ekta.svg",
    name: "Ekta",
    role: "Head - Research and Design",
    linkedin: "https://www.linkedin.com/in/ekta-21153647/",
    email: "ekta@invincibleyou.world",
    description:
      "Ekta is the Head of Design at Invincible YOU, merging design expertise with psychological insight to craft meaningful user experiences. She led the design of the Invincible YOU B2B app and website, creating intuitive, user-focused solutions that reflect the organization's mission & vision.",
  },
];

// ================================
// Banner
// ================================

const BannerTitle = () => {
  return (
    <div className="flex w-full flex-col items-center justify-end pt-10 sm:h-[178px] sm:w-11/12 sm:max-w-[1200px] sm:bg-gradient-to-b sm:from-[#680087]/10 sm:to-white">
      <h1 className="text-3xl font-semibold tracking-wider text-[#680087] sm:text-4xl">
        Meet the Team
      </h1>
      <p className="text-xl">The People Behind the Success</p>
    </div>
  );
};

const ShwetaBanner = () => {
  return (
    <div className="relative mt-16 flex w-10/12 flex-col items-center justify-center sm:my-12 sm:w-11/12 sm:max-w-[1200px] sm:py-12">
      {/* Background Split */}
      <div className="absolute inset-0 hidden grid-cols-5 sm:grid">
        {/* 30% White */}
        <div className="col-span-1 bg-white"></div>
        {/* 70% Gray */}
        <div className="col-span-4 bg-[#4d4d4d]/5"></div>
      </div>

      {/* Inner Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-0">
        <div className="relative w-[300px] basis-1/3">
          <AspectRatio ratio={3 / 4}>
            <Image
              src={employees[0].src}
              alt={employees[0].name}
              layout="fill"
              objectFit="contain"
              className="grayscale transition-all duration-300 hover:grayscale-0"
            />
          </AspectRatio>
        </div>
        <div className="flex basis-2/3 flex-col justify-center text-center sm:p-10 sm:text-left md:p-20">
          <span className="text-2xl font-semibold uppercase text-[#680087]">
            {employees[0].name}
          </span>
          <span className="mb-4 flex flex-col items-center gap-2 text-lg font-semibold sm:flex-row sm:gap-4">
            {employees[0].role}
            <div className="flex flex-row items-center gap-4">
              <Link href={employees[0].linkedin} target="_blank">
                <Image src="/wwa1.svg" alt="LinkedIn" width={20} height={20} />
              </Link>
              <Link href={`mailto:${employees[0].email}`}>
                <Image src="/wwa2.svg" alt="Gmail" width={20} height={20} />
              </Link>
            </div>
          </span>
          <p className="text-lg">{employees[0].description}</p>
        </div>
      </div>
    </div>
  );
};

// ================================
// Employee Card
// ================================

const ImageContainer = ({ employee }: { employee: (typeof employees)[0] }) => {
  return (
    <div className="relative h-full w-full border-b-4 border-[#680087]/70 bg-[#680087]/5 sm:hidden">
      <AspectRatio ratio={1 / 1}>
        <Image
          src={employee.src}
          alt={employee.name}
          layout="fill"
          objectFit="contain"
        />
      </AspectRatio>
    </div>
  );
};

const AnimatedImageContainer = ({
  employee,
  isHovered,
}: {
  employee: (typeof employees)[0];
  isHovered: boolean;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isHovered) {
      animate(scope.current, { opacity: 0, scale: 0, height: 0 });
    } else {
      animate(scope.current, { opacity: 1, scale: 1, height: "auto" });
    }
  }, [isHovered, animate, scope]);

  return (
    <motion.div
      ref={scope}
      key={employee.id}
      className="relative hidden h-full w-full border-b-4 border-[#680087]/70 bg-[#680087]/5 sm:block"
    >
      <AspectRatio ratio={1 / 1}>
        <Image
          src={employee.src}
          alt={employee.name}
          layout="fill"
          objectFit="contain"
        />
      </AspectRatio>
    </motion.div>
  );
};

const HeaderContainer = ({ employee }: { employee: (typeof employees)[0] }) => {
  return (
    <CardHeader className="flex min-h-[150px] flex-col items-center justify-center">
      <CardTitle className="text-2xl font-semibold uppercase text-[#680087]">
        {employee.name}
      </CardTitle>
      <CardDescription className="flex flex-col items-center justify-center gap-2 text-center text-lg">
        {employee.role}
        <div className="flex flex-row items-center gap-4">
          <Link href={employee.linkedin} target="_blank">
            <Image src="/wwa1.svg" alt="LinkedIn" width={20} height={20} />
          </Link>
          <Link href={`mailto:${employee.email}`}>
            <Image src="/wwa2.svg" alt="Gmail" width={20} height={20} />
          </Link>
        </div>
      </CardDescription>
    </CardHeader>
  );
};

const DescriptionContainer = ({
  employee,
}: {
  employee: (typeof employees)[0];
}) => {
  return (
    <CardContent>
      <p className="w-full text-center text-base text-[var(--text-color)]">
        {employee.description}
      </p>
    </CardContent>
  );
};

const EmployeeCard = ({ employee }: { employee: (typeof employees)[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex w-full flex-col items-center justify-start overflow-hidden rounded-sm p-2 shadow-none sm:h-[450px] sm:max-w-[300px]"
    >
      <ImageContainer employee={employee} />
      <AnimatedImageContainer employee={employee} isHovered={isHovered} />
      <HeaderContainer employee={employee} />
      <DescriptionContainer employee={employee} />
    </Card>
  );
};

// ================================
// Carousel
// ================================

const EmployeeCarousel = () => {
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
    <div className="my-24 flex w-screen flex-col items-center justify-center gap-6 md:hidden">
      <Carousel className="w-[300px]" setApi={setApi}>
        <CarouselContent>
          {employees.slice(1).map((employee) => (
            <CarouselItem key={employee.id}>
              <EmployeeCard employee={employee} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex h-[6px] flex-row items-center justify-center gap-1">
          {employees.slice(1).map((employee) => (
            <div
              key={employee.id}
              data-current={current === employee.id}
              className="h-[6px] w-[6px] rounded-full bg-[#4d4d4d4D] data-[current='true']:bg-[#000]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EmployeeSection = () => {
  return (
    <div className="hidden w-11/12 max-w-[1200px] flex-wrap items-center justify-center gap-16 bg-gradient-to-b from-white via-white/100 to-[#680087]/10 sm:py-24 md:flex">
      {employees.slice(1).map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
      <EmployeeCarousel />
    </div>
  );
};

export default function WhoWeAre() {
  const { setActiveRoute } = useContext(AppContext);
  useEffect(() => {
    setActiveRoute({ id: "/who-we-are", name: "Who we are" });
  }, [setActiveRoute]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      <BannerTitle />
      <ShwetaBanner />
      <div className="h-24 w-full bg-gradient-to-b from-white to-[#4d4d4d]/5 sm:hidden" />
      <EmployeeCarousel />
      <EmployeeSection />
      <Footer />
    </div>
  );
}
