import GithubIcon from "../icons/github-icon";
import InstaIcon from "../icons/insta-icon";
import LinkedinIcon from "../icons/Linkedin-icon";
import YoutubeIcon from "../icons/youtube-Icon";

import '@/components/social-btn/social-btns.scss'

interface SocialBtnsProps {}
export default function SocialBtns(props: SocialBtnsProps) {
  return (
    <>
      <div className="social">
        <a href="https://www.instagram.com/italoopcode/" target="_blank"><InstaIcon /></a>
        <a href="https://www.linkedin.com/in/%C3%ADtalo-silva-055b7a215/" target="_blank"><LinkedinIcon /></a>
        <a href="https://github.com/itaLoopCode" target="_blank">< GithubIcon /></a>
        <a href="https://www.youtube.com/@ItaLoopCode/featured" target="_blank">< YoutubeIcon /></a>
      </div>
    </>
  );
} 
