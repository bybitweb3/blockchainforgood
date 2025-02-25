import { Hero } from "./hero";
import { Fund } from "./fund";
import { Candidates } from "./candidates";

export default function JointFundPage() {
  return (
    <div className="bg-incubation w-full">
      <Hero />
      <Fund />
      <Candidates />
    </div>
  );
}
