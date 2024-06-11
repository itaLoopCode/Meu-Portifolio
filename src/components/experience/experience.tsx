import "./experience.scss";

import Image from "next/image";
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
      <div className="experience-time">
        <div className="experience-language">
          <Image
            src="/react.png"
            alt="React Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure m2"><span>2 anos</span></div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            src="/js.png"
            alt="Javascript Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure m3"><span>3 anos</span></div>
          </div>
        </div>
        <div>
          <div className="experience-language">
            <Image
              src="/ts.png"
              alt="Typescript Logo"
              width={40}
              height={40}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure m2"><span>2 anos</span></div>
            </div>
          </div>
          <div className="experience-language">
            <Image
              src="/java.png"
              alt="Java Logo"
              width={40}
              height={40}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure m1"><span>1 ano</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}