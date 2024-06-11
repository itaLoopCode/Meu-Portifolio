import "./experience.scss";

import { SectionTitle } from "../SectionTitle/sectionTitle";

export function Experience() {
  return (
    <>
      <div className="experience">
        <SectionTitle text="Experiência" />
        <p>
          Há três anos no mercado web ajudando empresas a se conectarem com seus
          clientes
        </p>
      </div>
      <div className="experience-time"></div>

    </>
  );
}