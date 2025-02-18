import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFigma, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/AdrianDaDon?tab=repositories" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/belo-adrien-69aa79280/" },
  { icon: <FaFigma />, path: "https://www.figma.com/files/team/1430305902124805483/recents-and-sharing?fuid=1430305898602754592" },
  // { icon: <FaInstagram />, path: "" },
];

export default function Socials({ containerSyles, iconStyles }) {
  return (
    <div className={containerSyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
