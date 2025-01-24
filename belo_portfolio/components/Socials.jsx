import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFigma, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/WhoShotYa08?tab=repositories" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaFigma />, path: "" },
  { icon: <FaInstagram />, path: "" },
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
