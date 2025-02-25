import { Header } from "./header";
import { Candidates } from "./candidates";
import { Awards } from "./awards";

export default function HackathonPage() {
  return (
    <div className="w-full">
      <Header />
      <Awards />
      <Candidates />
    </div>
  );
}
