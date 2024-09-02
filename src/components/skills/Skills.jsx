import React from "react";
import { skills } from "../../utils/constants/skills";

function Skills() {
  return (
    <div id="skills" className="flex flex-col my-32 w-[100vw] px-4">
      <div className="">
        <span className="text-4xl font-bold text-black mx-8">
          Skills Arsenal ⚔️
        </span>
        <p className="text-xl font-bold text-black mx-8 my-4">
          The skills, tools and technologies I am using to bring web apps alive
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
                skill.name === "Passwordless Authentication" ? "w-12" : "w-10"
              }`}
              alt="skill"
            />
            <h2 className="w-24 text-center">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
