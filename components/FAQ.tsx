"use client";

import { useIsMobile } from "@/hooks";
import { cn } from "@/lib";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const FAQItem = ({
  question,
  answer,
  index,
  color,
}: {
  question: string;
  answer: string;
  index: number;
  color?: {
    question: string;
    answer: string;
  };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobile = useIsMobile();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center w-full py-4 focus:outline-none cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3
          className={`grow shrink basis-0 text-base font-bold font-['Inter'] leading-normal ${
            color?.question || "text-black"
          }`}
        >
          {index}. {question}
        </h3>
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-500 relative top-[1px] ml-1",
            color?.question || "text-black",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300`}
        style={{
          transition: "max-height 0.5s ease",
          maxHeight: isOpen ? (mobile ? 500 : 200) : 0,
        }}
      >
        <div className={`pb-4 ${color?.question || "text-typography"}`}>
          <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
};
