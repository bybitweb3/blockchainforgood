import { IItem } from "../data";
import { FAQItem } from "@/components/FAQ";

export function Faq({ list }: { list: IItem["faq"] }) {
  return (
    <div id="faq" className="h-screen space-y-8 md:space-y-10">
      <h3 className="font-bold text-main text-4xl">FAQs</h3>
      <div className="border border-main py-6 px-4 md:p-10">
        {list.map((faq, index) => (
          <div key={index}>
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={0}
              color={{
                question: "text-white",
                answer: "text-description",
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2"
              viewBox="0 0 1232 2"
              fill="none"
              className="w-full"
            >
              <path d="M0 1.00024L1232 1.00035" stroke="#7D8CA3" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
