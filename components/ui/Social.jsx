import Link from "next/link";
import{FaGithub, FaLinkedinIn, FaInstagram , FaTwitter} from 'react-icons/fa';

const socials = [
    { icon: <FaGithub/>, path:"https://github.com/PhantomPhreak007"},
    { icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/shivansh-kaushik-b3165827a/" },
    { icon: <FaInstagram />, path:""},
    { icon: <FaTwitter/> , path:""},
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