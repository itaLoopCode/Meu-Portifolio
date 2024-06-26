import { Buttons } from "@/components/buttons/buttons";
import { Header } from "@/components//header/header";
import { Info } from "@/components/information/information";
import { Experience } from "@/components/experience/experience";

import "../components/styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />

      <Info />

      <Experience />

      <Buttons />
    </main>
  );
}
