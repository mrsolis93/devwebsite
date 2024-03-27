"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Augustine Solis</h3>
            <h4 className="typer">
              <ReactTyped
                strings={[
                  "Red Teamer",
                  "Engineer",
                  "Maker",
                  "Student",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
                Just some guy based in Texas trying his best to learn about how things are made and why they work. Hopefully making a few of his own things along the way.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
