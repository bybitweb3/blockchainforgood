"use client";
import { cn } from "@/lib";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ROUTER_PATH } from "@/constants";

export const hashClick = (e?: any, id?: string) => {
  e && e.preventDefault();
  if (!id) return;
  const element = document.getElementById(id);
  element?.scrollIntoView({ block: "start", behavior: "smooth" });
};

const hashNavs = [
  {
    name: "About",
    id: "about",
  },
  {
    name: "FAQ",
    id: "faq",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

const menuNavs = [
  {
    name: "Home",
    route: ROUTER_PATH.HOME,
  },
  {
    name: "News",
    route: ROUTER_PATH.NEWS.ROOT,
  },
];

export const Header = () => {
  const [top, setTop] = useState<number>(0);
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === ROUTER_PATH.HOME;

  useEffect(() => {
    if (!document?.getElementById) return;
    document?.addEventListener("scroll", () => {
      if (window?.scrollY <= 500) {
        setTop(window?.scrollY > 200 ? 200 : window?.scrollY);
      }
    });

    return () => {
      document?.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header className="w-full h-12 md:h-[64px] box-border px-4 md:px-0 z-40 sticky top-0 bg-white border-b border-black">
      <div className="py-3 justify-between items-center flex w-full md:w-content m-auto">
        <Link
          href={ROUTER_PATH.HOME}
          className="flex items-center gap-2 cursor-pointer"
        >
          <svg
            width="89"
            height="24"
            viewBox="0 0 89 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.729889H4.71878C7.00555 0.729889 8.01407 1.86364 8.01407 3.19599C8.01407 4.20747 7.48277 4.92996 6.72323 5.24267C7.43386 5.49536 8.27639 6.16079 8.27639 7.38643C8.27639 8.94108 7.11524 10.2127 4.74991 10.2127H0V0.729889ZM4.24825 4.38606C5.01371 4.38606 5.32198 3.99258 5.32198 3.47831C5.32198 2.88995 4.89515 2.60169 4.22675 2.60169H2.69655V4.38606H4.2475H4.24825ZM2.69729 8.3453H4.11783C5.0315 8.3453 5.41978 7.94812 5.41978 7.26935C5.41978 6.67357 5.05224 6.25194 4.16895 6.25194H2.69729V8.34456V8.3453Z"
              fill="black"
            />
            <path
              d="M38.075 0.729889H40.8345V4.5802C41.4547 3.7147 42.8552 1.97924 43.7904 0.729889H47.0813L43.597 4.61577L47.2005 10.2134H43.9445L41.6733 6.40977L40.8345 7.27454V10.2134H38.075V0.729889Z"
              fill="black"
            />
            <path
              d="M55.4279 7.03519C55.093 8.94701 53.6902 10.2127 51.1811 10.2127C48.1867 10.2127 46.7402 8.19191 46.7402 5.53834C46.7402 2.88476 48.1704 0.729889 51.3108 0.729889C53.9977 0.729889 55.2211 2.29195 55.4012 3.87476H52.7425C52.6209 3.21451 52.2393 2.61281 51.2493 2.61281C49.9474 2.61281 49.5027 3.84882 49.5027 5.44497C49.5027 6.8944 49.8725 8.32604 51.279 8.32604C52.3445 8.32604 52.6424 7.55242 52.7565 7.03593H55.4286L55.4279 7.03519Z"
              fill="black"
            />
            <path
              d="M37.1115 7.03519C36.7766 8.94701 35.3738 10.2127 32.8647 10.2127C29.8703 10.2127 28.4238 8.19191 28.4238 5.53834C28.4238 2.88476 29.854 0.729889 32.9944 0.729889C35.6813 0.729889 36.9047 2.29195 37.0848 3.87476H34.4261C34.3045 3.21451 33.9229 2.61281 32.9329 2.61281C31.6309 2.61281 31.1863 3.84882 31.1863 5.44497C31.1863 6.8944 31.5561 8.32604 32.9625 8.32604C34.0281 8.32604 34.326 7.55242 34.4401 7.03593H37.1122L37.1115 7.03519Z"
              fill="black"
            />
            <path
              d="M56.3474 0.729889H59.1559V4.30603H62.0732V0.729889H64.8869V10.2868H62.0732V6.38087H59.1559V10.2868H56.3474V0.729889Z"
              fill="black"
            />
            <path
              d="M68.9469 8.36827L68.3978 10.2127H65.6909L68.6876 0.729889H72.2852L75.4004 10.2127H72.4986L71.9229 8.36827H68.9469ZM71.4353 6.30899C70.9899 4.81881 70.6253 3.49388 70.4104 2.56983H70.3726C70.1533 3.59169 69.7909 4.94478 69.4064 6.30899H71.436H71.4353Z"
              fill="black"
            />
            <path
              d="M78.9032 0.729889V10.2868H76.0947V0.729889H78.9032Z"
              fill="black"
            />
            <path
              d="M80.3052 10.2127V0.729889H83.6309C84.6283 2.86549 86.0732 5.75101 86.4719 6.91959H86.5186C86.4134 5.93478 86.3889 4.26009 86.3889 2.74767V0.729889H88.9217V10.2127H85.7539C84.9491 8.49573 83.2337 4.93737 82.7883 3.6858H82.7513C82.8394 4.57798 82.8476 6.41348 82.8476 8.08298V10.2127H80.3059H80.3052Z"
              fill="black"
            />
            <path
              d="M0 13.6065H1.54354V13.8311H0.251196V14.7077H1.46351V14.9322H0.251196V16.0875H0V13.6065Z"
              fill="black"
            />
            <path
              d="M3.9784 14.8315C3.9784 15.511 3.60716 16.123 2.83502 16.123C2.12217 16.123 1.7146 15.5591 1.7146 14.847C1.7146 14.1349 2.11847 13.571 2.86097 13.571C3.54937 13.571 3.9784 14.1016 3.9784 14.8307V14.8315ZM1.98286 14.8366C1.98286 15.3917 2.28 15.8993 2.84687 15.8993C3.45895 15.8993 3.71017 15.3976 3.71017 14.8352C3.71017 14.2727 3.42561 13.7948 2.85132 13.7948C2.2474 13.7948 1.98286 14.2898 1.98286 14.8359V14.8366Z"
              fill="black"
            />
            <path
              d="M4.53346 14.9589V16.0882H4.2793V13.6073H5.20482C5.70353 13.6073 5.96807 13.8763 5.96807 14.2646C5.96807 14.5832 5.78134 14.784 5.52272 14.847C5.75392 14.9048 5.92731 15.0641 5.92731 15.4902V15.591C5.92731 15.7637 5.91619 15.9897 5.95991 16.089H5.70872C5.66278 15.9823 5.67018 15.7859 5.67018 15.5643V15.5058C5.67018 15.1227 5.55903 14.9604 5.09738 14.9604H4.5342L4.53346 14.9589ZM4.53346 14.7366H5.10552C5.51604 14.7366 5.70204 14.5832 5.70204 14.2779C5.70204 13.9919 5.51531 13.8289 5.15147 13.8289H4.53346V14.7366Z"
              fill="black"
            />
            <path
              d="M16.2238 23.0545H14.1423C14.1423 22.6128 14.275 22.2416 14.275 22.0371C13.7585 22.7166 12.7715 23.0545 11.5036 23.0545C8.70921 23.0545 7.2998 20.9419 7.2998 18.4098C7.2998 15.611 8.93078 13.5717 11.9719 13.5717C14.7292 13.5717 15.9949 15.1464 16.1601 16.5484H13.511C13.3798 16.0645 13.0397 15.4554 11.96 15.4554C10.4328 15.4554 10.0579 16.8581 10.0579 18.3172C10.0579 19.7762 10.4936 21.1538 11.9682 21.1538C13.3161 21.1538 13.4487 20.1875 13.4487 19.5851H11.8296V17.7347H16.2327L16.2246 23.0545H16.2238Z"
              fill="black"
            />
            <path
              d="M38.075 13.571H42.1483C45.1665 13.571 46.9175 15.4806 46.9175 18.2083C46.9175 20.9359 45.2124 23.0545 42.1053 23.0545H38.075V13.5717V13.571ZM40.8567 21.0419H41.9216C43.4303 21.0419 44.0475 19.9845 44.0475 18.2083C44.0475 16.638 43.471 15.5836 41.9542 15.5836H40.8567V21.0412V21.0419Z"
              fill="black"
            />
            <path
              d="M16.2318 8.15338H12.0814V0.729889H9.29443V10.2127H16.2318V8.15338Z"
              fill="black"
            />
            <path
              d="M22.132 10.492L17.5889 7.86884V2.62319L22.132 0L26.6752 2.62319V7.86958L22.132 10.4928V10.492ZM18.4781 7.35606L22.132 9.46573L25.786 7.35606V3.13672L22.132 1.02705L18.4781 3.13672V7.35606Z"
              fill="black"
            />
            <path
              d="M22.1319 5.92665L17.811 3.43239L18.2556 2.66248L22.1319 4.90034L26.0081 2.66248L26.4527 3.43239L22.1319 5.92665Z"
              fill="black"
            />
            <path
              d="M22.5765 5.40347H21.6873V9.7888H22.5765V5.40347Z"
              fill="black"
            />
            <path
              d="M22.132 24L17.5889 21.3768V16.1304L22.132 13.5072L26.6752 16.1304V21.3768L22.132 24ZM18.4781 20.8633L22.132 22.973L25.786 20.8633V16.644L22.132 14.5343L18.4781 16.644V20.8633Z"
              fill="black"
            />
            <path
              d="M22.1319 19.4346L17.811 16.9396L18.2556 16.1697L22.1319 18.4076L26.0081 16.1697L26.4527 16.9396L22.1319 19.4346Z"
              fill="black"
            />
            <path
              d="M22.5765 18.9114H21.6873V23.2968H22.5765V18.9114Z"
              fill="black"
            />
            <path
              d="M32.1416 24L27.5984 21.3768V16.1304L32.1416 13.5072L36.6847 16.1304V21.3768L32.1416 24ZM28.4876 20.8633L32.1416 22.973L35.7955 20.8633V16.644L32.1416 14.5343L28.4876 16.644V20.8633Z"
              fill="black"
            />
            <path
              d="M32.1417 19.4346L27.8208 16.9396L28.2654 16.1697L32.1417 18.4076L36.0179 16.1697L36.4625 16.9396L32.1417 19.4346Z"
              fill="black"
            />
            <path
              d="M32.5862 18.9114H31.697V23.2968H32.5862V18.9114Z"
              fill="black"
            />
            <path
              d="M22.5765 9.15076H21.6873V16.2171H22.5765V9.15076Z"
              fill="black"
            />
          </svg>
        </Link>

        {/* {pathname?.includes("home") ? (
          <div className="justify-end items-center gap-2 md:gap-12 flex">
            <div className="justify-end items-start gap-2 md:gap-1 flex">
              {hashNavs?.map((nav, index) => {
                return (
                  <div
                    key={index}
                    className="justify-center items-center gap-2.5 flex border-b-[4px] border-b-transparent hover:border-b-main py-2 px-2 md:px-6"
                  >
                    <nav
                      className="text-center text-text text-xs md:text-sm font-medium font-['Inter'] leading-[14px] cursor-pointer"
                      onClick={(e) => {
                        hashClick(e, nav.id);
                      }}
                    >
                      {nav.name}
                    </nav>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="justify-end items-start gap-2 md:gap-1 flex">
            <div className="justify-center items-center gap-2.5 flex border-b-[4px] border-b-transparent hover:border-b-main py-2 px-2 md:px-6">
              <nav
                className="text-center text-text text-xs md:text-sm font-medium font-['Inter'] leading-[14px] cursor-pointer"
                onClick={() => {
                  router.push("/home");
                }}
              >
                Home
              </nav>
            </div>
            <div className="justify-center items-center gap-2.5 flex border-b-[4px] border-b-transparent hover:border-b-main py-2 px-2 md:px-6">
              <nav
                className="text-center text-text text-xs md:text-sm font-medium font-['Inter'] leading-[14px] cursor-pointer"
                onClick={() => {
                  router.push("/blogs");
                }}
              >
                Blogs
              </nav>
            </div>
          </div>
        )} */}
        <div>
          <div
            className={cn(
              isHomePage ? "flex" : "hidden md:flex",
              "justify-end items-start gap-2 md:gap-1"
            )}
          >
            {menuNavs?.map((nav) => (
              <div
                key={nav.name}
                className={cn(
                  "justify-center items-center gap-2.5 flex hover:text-main py-2 px-2 md:px-6",
                  (nav.route === ROUTER_PATH.HOME
                    ? pathname === nav.route
                    : pathname!.startsWith(nav.route)) && "text-main"
                )}
              >
                <nav
                  className="text-center text-text text-xs md:text-sm font-medium font-['Inter'] leading-[14px] cursor-pointer"
                  onClick={() => {
                    router.push(nav.route);
                  }}
                >
                  {nav.name}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};