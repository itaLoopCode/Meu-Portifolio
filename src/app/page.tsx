import { Header } from "@/components//header/header";
import { Info } from "@/components/Languages/languages";
import { Experience } from "@/components/experience/experience";

import '../components/styles/home.scss'

export default function Home() {
  return (
    <main className="container">
      
      <Header />

      <Info />

      <Experience />

    </ main>
  );
}
