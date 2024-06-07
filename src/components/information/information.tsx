
import '@/components/information/information'
import { SectionTitle } from '../SectionTitle/sectionTitle';

export function Info() {
  return (
    <>
      <div className="info">
        <SectionTitle text="Idiomas"/>
        <div className="languages-info">
          <span>Inglês - Intermediário</span>
          <br />
          <span>Francês - Intermediário</span>

          
        </div>
        <SectionTitle text='Educação'/>
        <span>Engenharia de software - UFBRA</span>
      </div>
    </>
  );
}
