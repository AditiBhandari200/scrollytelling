import React, { useContext } from "react";
import {
  AppContext,
  AppContextProps,
  routes,
} from "@/contexts/app-context-provider";
import Link from "next/link";
import {
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

function Sidebar() {
  const { setIsMenuOpen, setActiveRoute, activeRoute } = useContext(AppContext);
  const handleOnClick = (route: AppContextProps["activeRoute"]) => {
    if (route.id === activeRoute.id) {
      setIsMenuOpen(false);
      return;
    }
    setActiveRoute(route);
  };

  return (
    <div className="flex h-full w-full flex-1 flex-col">
      <SheetHeader className="max-h-[100px] flex-1">
        <SheetTitle className="flex h-full w-full items-center justify-center p-8">
          <div className="relative h-full w-full">
            <Image
              src="/logo2.png"
              alt="logo2"
              fill
              className="object-contain"
              priority
            />
          </div>
        </SheetTitle>
      </SheetHeader>
      <SheetDescription className="mt-4 flex flex-1 flex-col items-center gap-4 overflow-y-scroll">
        {routes.slice(0, 8).map((route) => (
          <Link
            key={route.id}
            onClick={() => handleOnClick(route)}
            href={route.id ?? "/"}
            data-active={activeRoute.id === route.id}
            className="justify-flex-start flex h-[30px] w-full items-center rounded-md bg-gray-50 px-4 py-6 text-sm font-semibold text-black shadow-md hover:bg-[var(--purple50)] hover:text-[var(--purple900)] data-[active=true]:bg-[var(--purple50)] data-[active=true]:text-[var(--purple900)]"
          >
            {route.name}
          </Link>
        ))}
      </SheetDescription>
      <SheetFooter>
        <div className="flex w-full items-center justify-evenly gap-2 text-sm text-[--text-color]">
          <span>&copy; {new Date().getFullYear()} Invincible You</span>
          <span>|</span>
          <Link
            href="/privacy"
            data-active={activeRoute.id === "/privacy"}
            className="rounded-md px-2 py-2 underline-offset-4 transition-all duration-200 hover:text-[var(--purple900)] hover:underline data-[active=true]:text-[var(--purple900)] data-[active=true]:underline"
          >
            Privacy
          </Link>
        </div>
      </SheetFooter>
    </div>
  );
}

export default Sidebar;
