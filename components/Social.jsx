import React from "react";

const SocialShare = [
  {
    iconName: "github",
    link: "https://github.com/mrsolis93",
  },
  { iconName: "linkedin", 
  link: "https://www.linkedin.com/in/augustine-solis-a92a8363/" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/augustinesolis/",
  },
  // { iconName: "dribbble", link: "https://dribbble.com/" },
  // {
  //   iconName: "tik-tok",
  //   link: "https://www.tiktok.com/",
  // },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
