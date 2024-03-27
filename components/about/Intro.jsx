import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/2.jpg",
    name: "Augustine Solis",
    designation: "Aspiring Red Teamer",
    text: (
      <>
        <p>
          Hi, my name is Augustine Solis and after graduating from University 
          I have been studying a variety of Offensive Security topics with the
           goal of taking the OSCP and eventually attaining a OSCE3 certification.
            Mostly to get a nifty little coin.
        </p>
        <p>
          In my free time I enjoy gaming, modifying all kinds of vehicles, setting up
          automated systems, making robots build other robots or learning about new
           computing topics. And a bunch of other random things involving technical
          or artistic fabrication. I have too many hobbies and need to get it under 
          control. Or get a couple more who knows.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
