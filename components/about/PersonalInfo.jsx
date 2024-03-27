import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Age",
          content: "30",
        },
        {
          id: 2,
          name: "Nationality",
          content: "USA",
        },
        {
          id: 3,
          name: "Email",
          content: "augustine.solis02@gmail.com",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "University",
          content: "Texas A&M University - Commerce",
        },
        {
          id: 2,
          name: "Study",
          content: "BS in Computer Science",
        },
        {
          id: 3,
          name: "Certs",
          content: "OSCP (In Progress)",
        },
        
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
