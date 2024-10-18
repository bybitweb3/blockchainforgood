"use client";

import { OSCAR_HACKTHON_APPLY_LINK } from "@/constants";
import { FAQItem } from "@/components/FAQ";
import homeStyles from "../home/styles.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const faqs = [
  {
    question: "What types of projects can participate in?",
    answer: `Projects that align with the  <a href="https://sdgs.un.org/goals" style="color: #00d5bf">17 Sustainable Development Goals</a> and use blockchain to solve real-life problems.`,
  },
  {
    question: "Why should you apply for hackathon?",
    answer:
      "The winner of Hackathon will be awarded the grand prize, which consists of: Equity-free rewards – including funds to scale your business, complimentary speaking slot at BGA Oscar  and much more. Stay tuned for updates!",
  },
  {
    question: "Does it cost anything to participate?",
    answer: `Applying is free, and selection is merit-based. The grand prize is equity-free. The jury will be able to make offers to invest outside of the prize grant.`,
  },
  {
    question: "What is the application process?",
    answer: `If you are interested in <b>Sustainable Innovation Summit:The 17 SDGs Challenge</b>, please submit your application <a href="${OSCAR_HACKTHON_APPLY_LINK}" style="color: #00d5bf">here</a>.
Once you have submitted your application, the BlockChain For Good Review committee will review your application, along with others.<br />
BGA will announce next steps in the process to all applicants via email & TG.`,
  },
  {
    question:
      "There is a video required for the application. What is BlockChain For Good looking for?",
    answer: `Show us your product working in real-time! This is the best way to convey the value you are looking to showcase on the Hackathon stage. Feel free to use your phone or screen grabs to record the video – production quality isn't important, the key is to see your working product in action. 
      <br/>BGA is seeking projects that leverage blockchain technology to solve real-world problems, aligning with the United Nations' 17 Sustainable Development Goals.`,
  },
  {
    question:
      "Can I modify or update my submission after it has been submitted?",
    answer:
      "Yes, you can make changes or updates to your submission. However, please avoid submitting multiple times. Once your project has been successfully submitted, you will receive a confirmation email with a link for updates. The deadline for updates is September 30 at 11:00 PM UTC+8.",
  },
];

export const OscarFAQ = () => {
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
