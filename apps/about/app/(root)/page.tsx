import {Hero} from "~/components/hero";
import {Summary} from "~/components/summary";
import {History} from "~/components/history";

export default function Page() {
  return (
    <main>
      <Hero />
      <Summary />
      <History/>
    </main>
  );
}
