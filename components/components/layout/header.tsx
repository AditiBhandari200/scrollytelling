"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AppContext, routes } from "@/contexts/app-context-provider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Hamburger from "hamburger-react";
import Sidebar from "./sidebar";

const styles = {
  link: "px-2 py-2 font-semibold text-base underline-offset-4 transition-all duration-200 hover:text-[var(--purple900)] data-[active=true]:text-[var(--purple900)] data-[active=true]:underline",
  dropdown: "group inline-flex items-center",
  dropdownContent: "hidden group-hover:block",
};

function Header() {
  const { activeRoute, setActiveRoute, isMenuOpen, setIsMenuOpen } =
    useContext(AppContext);

  return (
    <>
      <div className="sticky top-0 z-50 flex h-[90px] w-full items-center justify-center border-[--purple900] bg-white p-2 sm:h-[76px] sm:border-b-[1px]">
        <div className="flex w-11/12 items-center justify-between gap-4 sm:w-11/12 sm:max-w-[1200px]">
          <div>
            <Link
              onClick={() => setActiveRoute({ id: "/", name: "Home" })}
              href="/"
              className="flex items-center justify-center gap-2 font-bold"
            >
              <div className="relative h-[60px] w-[150px] my-2">
                <Image
                  src="/logo2.png"
                  alt="logo"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex md:flex-wrap">
            {/* Home */}
            <Link
              onClick={() => setActiveRoute(routes[0])}
              href={routes[0].id ?? "/"}
              data-active={activeRoute.id === routes[0].id}
              className={styles.link}
            >
              {routes[0].name}
            </Link>

            {/* What we do */}
            <Link
              onClick={() => setActiveRoute(routes[1])}
              href={routes[1].id ?? "/"}
              data-active={activeRoute.id === routes[1].id}
              className={styles.link}
            >
              {routes[1].name}
            </Link>

            {/* Winning solutions */}
            <Link
              onClick={() => setActiveRoute(routes[2])}
              href={routes[2].id ?? "/"}
              data-active={activeRoute.id === routes[2].id}
              className={styles.link}
            >
              {routes[2].name}
            </Link>

            {/* About us dropdown */}
            <div className={styles.dropdown}>
              <span className={`${styles.link} cursor-pointer `}>
                About us
              </span>
              <div className={`absolute top-[55px] z-50 min-w-[180px] rounded-md border bg-white p-2 shadow-md ${styles.dropdownContent}`}>
                {/* Where it began */}
                <Link
                  onClick={() => setActiveRoute(routes[3])}
                  href={routes[3].id ?? "/"}
                  data-active={activeRoute.id === routes[3].id}
                  className="block w-full px-2 py-2 text-sm font-semibold hover:bg-gray-100 data-[active=true]:text-[var(--purple900)]"
                >
                  {routes[3].name}
                </Link>

                {/* Who we are */}
                <Link
                  onClick={() => setActiveRoute(routes[4])}
                  href={routes[4].id ?? "/"}
                  data-active={activeRoute.id === routes[4].id}
                  className="block w-full px-2 py-2 text-sm font-semibold hover:bg-gray-100 data-[active=true]:text-[var(--purple900)]"
                >
                  {routes[4].name}
                </Link>

                {/* Resources */}
                <Link
                  onClick={() => setActiveRoute(routes[5])}
                  href={routes[5].id ?? "/"}
                  data-active={activeRoute.id === routes[5].id}
                  className="block w-full px-2 py-2 text-sm font-semibold hover:bg-gray-100 data-[active=true]:text-[var(--purple900)]"
                >
                  {routes[5].name}
                </Link>
              </div>
            </div>

            {/* Book Launch */}
            <Link
              onClick={() => setActiveRoute(routes[6])}
              href={routes[6].id ?? "/"}
              data-active={activeRoute.id === routes[6].id}
              className={styles.link}
            >
              {routes[6].name}
            </Link>

            {/* Contact us */}
            <Link
              onClick={() => setActiveRoute(routes[7])}
              href="/contact-us"
              data-active={activeRoute.id === routes[7].id}
              className="rounded-full bg-[var(--purple900)] px-4 py-2 text-sm text-white transition-all duration-200 after:text-white hover:bg-[var(--purple800)] focus:text-white active:scale-95 active:text-white data-[active=true]:underline data-[active=true]:underline-offset-4"
            >
              Contact us
            </Link>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="block md:hidden">
              <Hamburger
                size={20}
                toggled={isMenuOpen}
                toggle={() => setIsMenuOpen(!isMenuOpen)}
              />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center justify-between">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>

      </div>
      {/* <AnnouncementBanner /> */}
    </>
  );
}

export default Header;
