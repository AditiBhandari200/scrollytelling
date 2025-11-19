"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useContext, useEffect } from "react";
import { AppContext } from "@/contexts/app-context-provider";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const buttons = () => {
  return (
    <div className="flex w-full items-center justify-center gap-6 sm:justify-start">
      <Link href="/contact-us">
        <Button className="text-md h-12 w-1/3 min-w-[120px] rounded-lg bg-[var(--purple900)] text-white transition-all duration-200 hover:bg-[var(--purple800)] sm:min-w-[150px]">
          Let&apos;s Chat
        </Button>
      </Link>
      <Link href="/what-we-do">
        <Button className="text-md border-1 h-12 w-1/3 min-w-[120px] rounded-lg border border-[var(--text-color)] bg-transparent text-[var(--text-color)] transition-all duration-200 hover:border-[var(--purple900)] hover:bg-white hover:text-[var(--purple900)] sm:w-1/5">
          Explore More
        </Button>
      </Link>
    </div>
  );
};

const text = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 tracking-[0.125rem] sm:items-start">
      <span >
        <span className="text-xl sm:text-3xl">We </span><span className="text-xl font-bold text-[var(--purple900)] sm:text-4xl sm:font-semibold ">Elevate Leaders</span>
      </span>
      <span >
        <span className="text-xl sm:text-3xl">and </span><span className="text-xl font-bold text-[var(--purple900)] sm:text-4xl sm:font-semibold ">Make Organizations</span>
      </span>
      <span >
        <span className="text-xl font-bold text-[var(--purple900)] sm:text-4xl sm:font-semibold ">Kinder, Braver</span><span className="text-xl sm:text-3xl"> and </span><span className="text-xl font-bold text-[var(--purple900)] sm:text-4xl sm:font-semibold ">Faster.</span>
      </span>
    </div>
  );
};

const image = () => {
  return (
    <Image
      src="/main.png"
      alt="Home Page Image"
      layout="fill"
      objectFit="contain"
    />
  );
};

const images = [
  { id: 1, image: "/c1.png" },
  { id: 2, image: "/c2.png" },
  { id: 3, image: "/c3.png" },
  { id: 4, image: "/c4.png" },
  { id: 5, image: "/c5.png" },
  { id: 6, image: "/c6.png" },
  { id: 7, image: "/c7.png" },
  { id: 8, image: "/c8.png" },
  { id: 9, image: "/c9.png" },
  { id: 10, image: "/c10.png" },
  { id: 11, image: "/c11.png" },
  { id: 12, image: "/c12.png" },
  { id: 13, image: "/c13.png" },
  { id: 14, image: "/c14.png" },
  { id: 15, image: "/c15.png" },
  { id: 16, image: "/c16.png" },
  { id: 17, image: "/c17.png" },
  { id: 18, image: "/c18.png" },
  { id: 19, image: "/c19.png" },
  { id: 20, image: "/c20.png" },
  { id: 21, image: "/c21.png" },
  { id: 22, image: "/c22.png" },
  { id: 23, image: "/c23.png" },
  { id: 24, image: "/c24.png" },
  { id: 25, image: "/c25.png" },
  { id: 26, image: "/c26.png" },
  { id: 27, image: "/c27.png" },
  { id: 28, image: "/c28.png" },
  { id: 29, image: "/c29.png" },
  { id: 30, image: "/c30.png" },
];

const banner = () => {
  return (
    <Marquee
      className="sm:mt-4 sm:max-w-[1200px]"
      pauseOnHover
      gradient
      gradientWidth={"10%"}
      speed={35}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className="mx-2 p-2 grayscale transition-all duration-200 hover:grayscale-0 sm:mx-4 sm:rounded-lg sm:border-[1px] sm:border-[#4d4d4d1A]"
        >
          <img src={image.image} alt="Client" className="h-[2rem] w-auto" />
        </div>
      ))}
    </Marquee>
  );
};

function HomePage() {
  const { setActiveRoute } = useContext(AppContext);
  useEffect(() => {
    setActiveRoute({ id: "/", name: "Home" });
  }, [setActiveRoute]);

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center overflow-y-scroll">
      <Header />
      <div className="mb-6 flex w-11/12 flex-1 flex-col gap-4 sm:mb-0 sm:max-w-[1200px] sm:flex-row sm:gap-0">
        <div className="flex flex-1 flex-col items-center justify-center gap-2 sm:min-w-[400px] sm:gap-4">
          <div className="relative flex w-full flex-1 items-center justify-center sm:hidden">
            {image()}
          </div>
          <div>
            {text()}
            <div className="mt-6 hidden w-full sm:flex">{buttons()}</div>
          </div>
        </div>
        <div className="relative mt-8 hidden items-center justify-center sm:flex sm:flex-1">
          {image()}
        </div>
        <div className="sm:hidden">{buttons()}</div>
      </div>
      {banner()}
      <Footer />
    </div>
  );
}

export default HomePage;
