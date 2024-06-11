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
        <a href=""><InstaIcon /></a>
        <a href=""><LinkedinIcon /></a>
        <a href="">< GithubIcon /></a>
        <a href="">< YoutubeIcon /></a>
      </div>
    </>
  );
}
