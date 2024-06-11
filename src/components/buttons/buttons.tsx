import SocialBtns from "../social-btn/social-btns"
import { EmailIcon } from "../icons/email-icon"

import '@/components/buttons/buttons.scss'


export function Buttons (){
    return (
        <>
      <div className="buttons">
      <SocialBtns />
      <a className="btn-prymary" href="mailto:italo_j.s@hotmail.com">
         Contate-me
        <EmailIcon />
      </a>
    </div>
    </>
    )
}