import React, { useContext } from "react";
import "@/app/globals.css";
import Link from "next/link";
import {
  AppContext,
  AppContextProps,
  Route,
} from "@/contexts/app-context-provider";
import Image from "next/image";

const copyright = () => {
  return (
    <div className="text-xs text-[var(--text-color)]">
      &copy; Invincible-YOU | All rights reserved
    </div>
  );
};

const socialMedia = () => {
  return (
    <div className="flex items-center justify-between gap-4 sm:gap-8">
      <div className="transition-all duration-200 hover:scale-110">
        <Link
          href="https://www.linkedin.com/company/invincibleyouworld"
          target="_blank"
        >
          <Image src="/linkedIN.svg" alt="linkedin" width={24} height={24} />
        </Link>
      </div>
      <div className="transition-all duration-200 hover:scale-110">
        <Link
          href="https://www.youtube.com/@invincible-you.official"
          target="_blank"
        >
          <Image src="/youTube.svg" alt="youtube" width={24} height={24} />
        </Link>
      </div>
      <div className="transition-all duration-200 hover:scale-110">
        <Link
          href="https://www.instagram.com/invincibleyou.official/"
          target="_blank"
        >
          <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

const links = (activeRoute: Route) => {
  return (
    <div className="hidden items-center justify-between gap-4 sm:flex sm:gap-4">
      <Link
        href="/who-we-are"
        data-active={activeRoute.id === "/who-we-are"}
        className="rounded-md px-2 py-2 underline-offset-4 transition-all duration-200 hover:text-[var(--purple900)] hover:underline data-[active=true]:text-[var(--purple900)] data-[active=true]:underline"
      >
        About us
      </Link>
      <Link
        href="/privacy"
        data-active={activeRoute.id === "/privacy"}
        className="rounded-md px-2 py-2 underline-offset-4 transition-all duration-200 hover:text-[var(--purple900)] hover:underline data-[active=true]:text-[var(--purple900)] data-[active=true]:underline"
      >
        Privacy
      </Link>
      <Link
        href="/contact-us"
        data-active={activeRoute.id === "/contact-us"}
        className="rounded-md px-2 py-2 underline-offset-4 transition-all duration-200 hover:text-[var(--purple900)] hover:underline data-[active=true]:text-[var(--purple900)] data-[active=true]:underline"
      >
        Contact us
      </Link>
    </div>
  );
};

function Footer() {
  const { activeRoute } = useContext<AppContextProps>(AppContext);

  return (
    <div
      data-is-home={activeRoute.id === "/"}
      className="flex h-[56px] w-full flex-row items-center justify-center border-t-[1px] border-[var(--text-color)] text-sm data-[is-home=true]:border-0 sm:flex-row"
    >
      <div className="flex w-11/12 flex-row items-center justify-between gap-4 sm:w-11/12 sm:max-w-[1200px]">
        {copyright()}
        {socialMedia()}
        {links(activeRoute)}
      </div>
    </div>
  );
}

export default Footer;
