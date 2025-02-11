import Link from "next/link";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialM = [
  {
    icon: <SiLeetcode />,
    path: "https://leetcode.com/u/narmadhals/",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/narmadha-l-s-583a92224/",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/narmadhals",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {SocialM.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // For security
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
