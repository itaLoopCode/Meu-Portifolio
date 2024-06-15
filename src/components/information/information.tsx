
import '@/components/information/information.scss'
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
        <span>Análise e Desenvolvimento de Sistemas - Instituto Federal de Educação e Ciência da Bahia</span>
      </div>
    </>
  )
}
