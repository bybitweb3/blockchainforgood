import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib";

const TOC_ITEMS = [
  {
    id: "key-objective",
    title: "Key Objectives",
  },
  {
    id: "scope",
    title: "Scope",
  },
  {
    id: "responsibility",
    title: "Responsibilities",
  },
  {
    id: "outcome",
    title: "Expected Outcomes",
  },
  {
    id: "next-step",
    title: "Next Steps",
  },
  {
    id: "faq",
    title: "FAQs",
  },
];

export function Toc({ link }: { link: string }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    // Observe all sections
    TOC_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      TOC_ITEMS.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="sticky top-0 md:top-10 left-0 bg-incubation md:bg-active text-white p-4 md:p-10 md:border md:border-main h-max flex flex-col w-full md:w-max">
      <nav className="gap-6 md:gap-0 md:space-y-6 flex-1 flex md:flex-col overflow-x-auto">
        {TOC_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "group flex flex-col md:flex-row items-center text-base whitespace-nowrap transition-colors font-medium px-0 md:px-4 border-b-2 md:border-l-4 md:border-b-0 border-transparent",
              activeId === item.id
                ? "text-main border-main"
                : "text-white hover:text-main hover:border-main"
            )}
          >
            <span className="order-1 md:order-none">{item.title}</span>
          </Link>
        ))}
      </nav>

      <Button
        className="hidden md:flex w-full mt-8 bg-transparent border border-white hover:bg-white hover:text-slate-900 transition-colors group rounded-none"
        asChild
      >
        <Link href={link} target="_blank">
          Registrate Now
          <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
}
