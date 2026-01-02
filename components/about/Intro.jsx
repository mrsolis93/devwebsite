import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/2.jpg",
    name: "Augustine Solis",
    designation: "Aspiring Red Teamer",
    text: (
      <>
        <p>
        Hi, I'm Augustine Solis. After graduating from university, I dove deep into 
        Offensive Security, studying through certifications, learning paths and blogs. 
        Hack the Box has been my playground for honing my skills in penetration testing
        working towards the OSE3 certification. I am currently working on the OSEP and 
        CRTO certifications.
        </p>
        <p>
        When I'm not breaking into (virtual) systems, I’m probably modifying vehicles, 
        setting up automated systems, or experimenting with robotics. I also enjoy gaming, exploring new computing topics, 
        and dabbling in all kinds of technical and artistic fabrication.
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
