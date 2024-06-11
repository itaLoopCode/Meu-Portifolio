import GithubIcon from "../icons/github-icon";
import InstaIcon from "../icons/insta-icon";
import LinkedinIcon from "../icons/Linkedin-icon";
import YoutubeIcon from "../icons/youtube-Icon";

import '@/components/buttons/buttons.scss'

interface SocialBtnsProps {}
export default function SocialBtns(props: SocialBtnsProps) {
  return (
    <>
      <div className="btns">
        <a href=""><InstaIcon /></a>
        <a href=""><LinkedinIcon /></a>
        <a href="">< GithubIcon /></a>
        <a href="">< YoutubeIcon /></a>
      </div>
    </>
  );
}
