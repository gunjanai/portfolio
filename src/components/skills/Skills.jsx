import React from "react";
import { skills } from "../../utils/constants/skills";

function Skills() {
  return (
    <>
      <div className="bg-[#ffe7d3]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffdce1"
            fill-opacity="1"
            d="M0,64L30,64C60,64,120,64,180,64C240,64,300,64,360,74.7C420,85,480,107,540,144C600,181,660,235,720,245.3C780,256,840,224,900,218.7C960,213,1020,235,1080,229.3C1140,224,1200,192,1260,202.7C1320,213,1380,267,1410,293.3L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div id="skills" className="flex flex-col w-[100vw] px-4 bg-[#ffdce1]">
          <div className="">
            <span className="text-4xl font-bold text-black mx-8">
              Skills Arsenal ⚔️
            </span>
            <p className="text-xl font-bold text-black mx-8 my-4">
              The skills, tools and technologies I am using to bring web apps
              alive
            </p>
          </div>
          <div className="flex flex-wrap w-[100%] justify-center p-4">
            {skills.map((skill, index) => (
              <div
                className="flex flex-col items-center justify-center mx-8 my-4 w-36"
                key={index}
              >
                <img
                  src={skill.image}
                  className={`my-4 rounded-lg ${
                    skill.name === "Passwordless Authentication"
                      ? "w-12"
                      : "w-10"
                  }`}
                  alt="skill"
                />
                <h2 className="w-24 text-center">{skill.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
