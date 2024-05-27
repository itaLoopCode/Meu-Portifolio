import Image from "next/image";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="experience">
        <h3>Experiência</h3>
        <p>Texto</p>
      </div>
      <div className="experience-time"></div>

      <div className="infos"></div>

      <div className="buttons">
        <div className="social"></div>
        <button>Contate-me</button>
      </div>

      <div className="info">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>En - Intermediário - B2</span>
          <br />
          <span>Pt-Br - Nativo</span>
        </div>
        <h3>Educação</h3>
        <span>Engenharia de software - UFBRA</span>
      </div>
    </main>
  );
}
