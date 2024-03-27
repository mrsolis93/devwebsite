import React from "react";
import Image from "next/image";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programming Skills",
      content: [
        " Javascript, HTML, CSS",
        " C++, C",
        " Java",
        " Arm Assembly",
        " Python",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Hack Tools",
      content: [
        " Powershell, Active Directory",
        " Burp Suite",
        " Metasploit, C2 Frameworks",
        " Responder, Bloodhound",
        " Hashcat, John"
      ],
    },
  ];
  return (
    <>
      {skillsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <Image
                      width={10}
                      height={10}
                      className="svg"
                      src="/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
