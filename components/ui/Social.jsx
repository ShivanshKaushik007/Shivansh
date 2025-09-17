import Link from "next/link";
import{FaGithub, FaLinkedinIn, FaInstagram , FaTwitter} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const socials = [
    { icon: <FaGithub/>, path:"https://github.com/ShivanshKaushik007"},
    { icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/shivansh-kaushik-b3165827a/" },
    { icon: <FaInstagram />, path:"https://www.instagram.com/shivanshkaushik1237"},
    { icon: <SiLeetcode/> , path:"https://leetcode.com/u/Shivansh_Kaushik/"},
];

const Social = ({containerStyles, iconStyles}) => {
  return( 
  <div className={containerStyles}>
  {socials.map((item, index) =>{
    return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    );
  })}
  </div>
  );
};
export default Social;
