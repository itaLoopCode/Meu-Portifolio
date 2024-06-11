
import '@/components/information/information.scss'
import { SectionTitle } from '../SectionTitle/sectionTitle';
import { EmailIcon } from '../icons/email-icon';
import SocialBtns from '../social-btn/social-btns';

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
  )
}
