"use client";

import Link from "next/link";

import MainWrapper from "@/components/containers/main-wrapper";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useScrollMonitor } from "@/hooks/use-scroll-monitor";
import SearchDialog from "@/components/search-dialog";
import ToggleTheme from "@/components/theme-mode";
import TooltipContainer from "../shared/tooltip-container";

interface Props {
  type?: "MAIN" | "INNER";
}

const MainNavbar = ({ type = "MAIN" }: Props) => {
  const { isScrolled } = useScrollMonitor();

  return (
    <nav
      className={cn(
        "h-auto sticky top-0 bg-white dark:bg-black",
        type === "MAIN" ? "z-20" : "z-10",
        isScrolled ? "border-b dark:border-b-muted" : ""
      )}
    >
      <MainWrapper className="flex items-center w-full justify-between px-4 h-16">
        {/* MAIN MOOBIE LOGO */}
        <div className="flex items-center ">
          <TooltipContainer align="start" content="Moobie Home?">
            <Link role="link" href="/home">
              <Icons.moobieIcon className="sm:block hidden h-8 w-32 dark:invert" />
              <Icons.moobieIconMobile className="h-8 w-8 cursor-pointer block sm:hidden dark:invert" />
            </Link>
          </TooltipContainer>
        </div>

        <div className="flex items-center gap-x-2">
          {/* THEME BUTTON */}
          <ToggleTheme />

          {/* SEARCH DIALOG TOGGLE BUTTON */}
          <SearchDialog />

          {/* NAVIGATE TO LOGIN */}
          <Link href="/login" className={buttonVariants({ className: "w-52 md:block hidden text-center"})}>Login</Link>

          {/* HAMBURGER BUTTON */}
          <Button
            aria-label=""
            role="button"
            size="icon"
            className="md:hidden flex"
            variant="ghost"
          >
            <MenuIcon className="h-7 w-7" />
          </Button>
        </div>
      </MainWrapper>
    </nav>
  );
};
export default MainNavbar;
