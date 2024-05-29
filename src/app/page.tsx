import { Header } from "@/components//header/header";
import { Languages } from "@/components/Languages/languages";
import { Experience } from "@/components/experience/experience";

import '../components/styles/home.scss'

export default function Home() {
  return (
    <main className="container">
      <Header />

      <Experience />

      <Languages />

    </ main>
  );
}
