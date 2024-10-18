"use client";

import {
  OSCAR_EVENT_ID,
  OSCAR_HACKTHON_APPLY_LINK,
  OSCAR_HACKTHON_EVENT_ID,
  ROUTER_PATH,
} from "@/constants";
import { FAQItem } from "@/components/FAQ";
import homeStyles from "../home/styles.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const faqs = [
  {
    question:
      "Do I need to register twice to participate in the full-day event?",
    answer: `The event is divided into two sessions. The morning session is the 17 SDGs Challenge Roadshow—click <a target="__blank" href="${ROUTER_PATH.FORM.PERSON}/${OSCAR_HACKTHON_EVENT_ID}" style="color: #00d5bf">here</a> to register. The afternoon session is The Chains of 
    Change—click <a target="__blank" href="${ROUTER_PATH.FORM.PERSON}/${OSCAR_EVENT_ID}" style="color: #00d5bf">here</a> to register.`,
  },
  {
    question: "Will meals be provided during the event?",
    answer:
      "Lunch will be served between 12:00 PM and 1:30 PM. All successfully registered participants are welcome to enjoy it.",
  },
  {
    question: "Does event registration require approval?",
    answer: `After submitting your information, it will be reviewed by the BGA team. Approval will be completed around November 7th.`,
  },
];

export const FAQ = () => {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div id="faq" ref={ref} className="w-full md:w-content m-auto px-6 md:px-0">
      <h2 className="text-lg md:text-xl font-bold text-oscarActive">FAQ</h2>
      <div className="self-stretch flex-col justify-start items-center flex">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            {index === 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2"
                viewBox="0 0 1232 2"
                fill="none"
                className="w-full md:w-content"
              >
                <path
                  d="M0 1.00024L1232 1.00035"
                  stroke="#7D8CA3"
                  strokeDasharray="1 2"
                />
              </svg>
            )}
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index + 1}
              color={{
                question: "text-description",
                answer: "text-typography",
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2"
              viewBox="0 0 1232 2"
              fill="none"
              className="w-full md:w-content"
            >
              <path
                d="M0 1.00024L1232 1.00035"
                stroke="#7D8CA3"
                strokeDasharray="1 2"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
