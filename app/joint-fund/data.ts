import P1Image from "@/assets/joint-fund/p1.png";
import P2Image from "@/assets/joint-fund/p2.png";
import P3Image from "@/assets/joint-fund/p3.png";
import P4Image from "@/assets/joint-fund/p4.png";
import CoverImage from "@/assets/joint-fund/cover.png";
import { StaticImageData } from "next/image";

export interface IItem {
  cover: StaticImageData;
  status: 0 | 1 | 2;
  name: string;
  description: string;
  date: string;
  id: string;
  link: string;
  parents: StaticImageData[];
  keyObjective: string;
  scope: string;
  responsibility: string;
  outcome: string;
  nextStep: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const list: IItem[] = [
  {
    status: 0,
    cover: CoverImage,
    name: "BGA <> Masverse1",
    link: "https://www.google.com",
    description:
      "The purpose of this collaboration is to leverage blockchain technology to address global challenges aligned with the United Nations’ 17 Sustainable Development Goals (SDGs), which is also what the BGA ethos is inspired by. Through joint efforts in global hackathons, incubation programs, and strategic events, BGA and UNDP aim to foster innovation, empower ecosystems, and drive sustainable impact globally.",
    date: "Dec 2nd, 2024",
    id: "1",
    parents: [
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
    ],
    keyObjective: "Key Objective 1",
    scope: "Scope 1",
    responsibility: "Responsibility 1",
    outcome: "Outcome 1",
    nextStep: "Next Step 1",
    faq: [
      {
        question: "Question 1",
        answer: "Answer 1",
      },
      {
        question: "Question 2",
        answer: "Answer 2",
      },
    ],
  },
  {
    status: 0,
    cover: CoverImage,
    name: "BGA <> Masverse2",
    link: "https://www.google.com",
    description:
      "The purpose of this collaboration is to leverage blockchain technology to address global challenges aligned with the United Nations’ 17 Sustainable Development Goals (SDGs), which is also what the BGA ethos is inspired by. Through joint efforts in global hackathons, incubation programs, and strategic events, BGA and UNDP aim to foster innovation, empower ecosystems, and drive sustainable impact globally.",
    date: "Dec 2nd, 2024",
    id: "3",
    parents: [
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
    ],
    keyObjective: "Key Objective 2",
    scope: "Scope 2",
    responsibility: "Responsibility 2",
    outcome: "Outcome 2",
    nextStep: "Next Step 2",
    faq: [
      {
        question: "Question 1",
        answer: "Answer 1",
      },
      {
        question: "Question 2",
        answer: "Answer 2",
      },
    ],
  },
];

export const STATUS = ["Soon", "Registration", "Closed"];

export const getItemById = (id: string) => {
  return list.find((item) => item.id === id);
};
