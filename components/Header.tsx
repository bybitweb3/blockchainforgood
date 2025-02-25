"use client";
import { cn } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTER_PATH } from "@/constants";
import { useRouter } from "next-nprogress-bar";
import { LogoSvg, LogoPNG } from "./LogoSvg";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Equal, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const menuNavs = [
  {
    name: "Programme",
    children: [
      {
        name: "Hackathon",
        route: ROUTER_PATH.HACKATHON,
      },
      {
        name: "Incubation",
        route: ROUTER_PATH.INCUBATION,
      },
      {
        name: "Oscar",
        route: ROUTER_PATH.OSCAR,
      },
    ],
  },
  {
    name: "Pulse",
    children: [
      {
        name: "News Column",
        route: ROUTER_PATH.NEWS.ROOT,
      },
      {
        name: "BGA Calendar",
        route: ROUTER_PATH.CALENDAR,
      },
    ],
  },
  {
    name: "Square",
    route: ROUTER_PATH.SQUARE,
  },
];

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === ROUTER_PATH.HOME;

  const isIncubationPage = pathname === ROUTER_PATH.INCUBATION;

  const isSquarePage = pathname === ROUTER_PATH.SQUARE;
  const isOscar = pathname === ROUTER_PATH.OSCAR;
  const isOscarCeremony = pathname === ROUTER_PATH.OSCAR_CEREMONY;

  const isProject = pathname.startsWith(ROUTER_PATH.PROJECT);
  const isVoting = pathname.startsWith(ROUTER_PATH.VOTING);

  const isOnSiteVote = /\/vote\/*\/*/.test(pathname);

  const iconSvgFillColor =
    isIncubationPage || isOscar || isOscarCeremony || isVoting || isOnSiteVote
      ? "white"
      : "black";

  const isDark = isIncubationPage || isOscar || isOscarCeremony;

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const onHiddenMobileMenuWhenClickOutside = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      onHiddenMobileMenu();
    }
  };

  const onHiddenMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const onMobileTopicClick = (route: string) => {
    router.push(route);
    setShowMobileMenu(false);
  };

  const [showHeaderBlur, setShowHeaderBlur] = useState<boolean>(true);
  useEffect(() => {
    if (!document?.getElementById) return;
    document?.addEventListener("scroll", () => {
      if (window?.scrollY <= 500) {
        setShowHeaderBlur(window?.scrollY > 200 ? false : true);
      } else {
        setShowHeaderBlur(false);
      }
    });

    return () => {
      document?.removeEventListener("scroll", () => {});
    };
  }, []);

  const activeClassName = getActiveClassName(isOscar);

  return (
    <header
      className={cn(
        showHeaderBlur && (isSquarePage || isHomePage) && "layout-header",
        isHomePage && "earth-bg",
        "w-full h-12 md:h-20 box-border px-4 md:px-0 sticky top-0 z-50",
        isIncubationPage && "bg-incubation",
        "relative"
      )}
    >
      <div
        className={cn(
          "py-3 justify-between items-center flex w-full",
          isVoting ? "px-16" : "md:w-content mx-auto"
        )}
      >
        <Link
          href={isProject ? "" : ROUTER_PATH.HOME}
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* <LogoSvg fill={iconSvgFillColor} /> */}
          <LogoPNG isDark={isDark} />
        </Link>
        {!(isProject || isVoting) && (
          <div>
            {/* Desktop */}
            <NavigationMenu
              delayDuration={100}
              className={cn(
                "hidden md:flex",
                "justify-end items-center gap-2 md:gap-1"
              )}
            >
              <NavigationMenuList>
                {menuNavs?.map((nav) => {
                  if (nav.children?.length) {
                    return (
                      <NavigationMenuItem
                        value={nav.name}
                        key={nav.name}
                        className="py-2 px-2 md:px-6"
                      >
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent p-0 hover:text-main",
                            (isOscar || isOscarCeremony) && "text-darkGray"
                          )}
                        >
                          <div
                            className={cn(
                              "justify-center items-center gap-2.5 flex hover:text-main",
                              isIncubationPage && "text-halfWhite",
                              (isOscar || isOscarCeremony) && "text-darkGray",
                              (isSpeicalRoute(nav.route)
                                ? pathname === nav.route
                                : pathname!.startsWith(nav.route)) &&
                                "text-main"
                            )}
                          >
                            <nav className="flex items-center text-text text-xs md:text-sm font-medium font-['Inter'] leading-[14px] cursor-pointer">
                              {nav.name}
                            </nav>
                          </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="flex gap-3 flex-col py-2 px-4 w-48">
                            {nav.children.map((child) => (
                              <NavigationMenuLink
                                key={child.name}
                                onSelect={() => router.push(child.route)}
                                className={cn(
                                  "hover:text-main cursor-pointer",
                                  pathname.startsWith(child.route) &&
                                    "text-main"
                                )}
                              >
                                {child.name}
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  return (
                    <NavigationMenuItem key={nav.name}>
                      <NavigationMenuLink
                        key={nav.name}
                        onSelect={() => router.push(nav.route)}
                      >
                        <div
                          key={nav.name}
                          className={cn(
                            "justify-center items-center gap-2.5 flex hover:text-main py-2 px-2 md:px-6",
                            isIncubationPage && "text-halfWhite",
                            (isOscar || isOscarCeremony) && "text-darkGray",
                            nav.route === ROUTER_PATH.OSCAR &&
                              "hover:text-oscarActive",
                            (isSpeicalRoute(nav.route)
                              ? pathname === nav.route
                              : pathname!.startsWith(nav.route)) &&
                              activeClassName
                          )}
                        >
                          <nav className="text-center text-text text-xs md:text-sm font-medium font-['Inter'] leading-[14px] cursor-pointer">
                            <div className="flex items-center gap-1">
                              {nav.name}
                            </div>
                          </nav>
                        </div>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            {/* Mobile */}
            {!showMobileMenu && (
              <Equal
                size={18}
                className={cn(
                  "md:hidden cursor-pointer absoluted z-30 top-3 right-2",
                  (isOscar ||
                    isIncubationPage ||
                    isOscarCeremony ||
                    isOnSiteVote) &&
                    "text-white"
                )}
                onClick={() => setShowMobileMenu(true)}
              />
            )}
            {showMobileMenu && (
              <div
                className="fixed z-40 inset-0 w-screen h-screen bg-black/80"
                onClick={onHiddenMobileMenuWhenClickOutside}
              >
                <div className="bg-white px-4 absolute top-0 left-0 w-full">
                  <X
                    size={16}
                    className="cursor-pointer absolute top-4 right-4 md:relative md:top-0 md:right-0"
                    onClick={onHiddenMobileMenu}
                  />
                  <div className="my-8">
                    <div
                      className={cn(
                        "py-2 px-2 text-active",
                        (isOscar || isOscarCeremony) && "text-darkGray",
                        pathname === ROUTER_PATH.HOME && "text-main"
                      )}
                    >
                      <nav
                        className="text-xl font-bold font-['Inter'] cursor-pointer"
                        onClick={() => onMobileTopicClick(ROUTER_PATH.HOME)}
                      >
                        Home
                      </nav>
                    </div>
                    {menuNavs?.map((nav) => (
                      <MobileMenuItem
                        nav={nav}
                        onRoute={onMobileTopicClick}
                        className={cn(
                          (isOscar || isOscarCeremony) && "text-darkGray",
                          (isSpeicalRoute(nav.route)
                            ? pathname === nav.route
                            : nav.route && pathname.startsWith(nav.route)) &&
                            activeClassName
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

function MobileMenuItem({
  className,
  nav,
  onRoute,
}: {
  nav: any;
  className: string;
  onRoute: (route: string) => void;
}) {
  const pathname = usePathname();

  const hasChildren = nav.children?.length;
  const [isExpanded, setIsExpanded] = useState(true);

  const onMobileMenuClick = () => {
    if (nav.route) {
      onRoute(nav.route);
    } else {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <div
      key={nav.name}
      className={cn("md:hover:text-main py-2 px-2 text-active", className)}
    >
      <nav
        className="font-['Inter'] cursor-pointer"
        onClick={onMobileMenuClick}
      >
        <div className="text-xl font-bold flex justify-between items-center">
          {nav.name}
          {hasChildren &&
            (isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
        </div>
        {hasChildren && isExpanded && (
          <ul className="pl-2 space-y-1">
            {nav.children.map((child: any) => (
              <li
                key={child.name}
                className={cn(
                  "text-base",
                  pathname.startsWith(child.route) && "text-main"
                )}
                onClick={() => onRoute(child.route)}
              >
                {child.name}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}

// 判断路由是否完全匹配
const isSpeicalRoute = (route: string) =>
  route === ROUTER_PATH.HOME || route === ROUTER_PATH.OSCAR;

const getActiveClassName = (isOscar: boolean): string =>
  isOscar ? "text-oscarActive" : "text-main";
