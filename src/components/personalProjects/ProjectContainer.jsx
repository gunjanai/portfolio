import React from "react";
import projects from "../../utils/constants/projects";
import ProjectCard from "./ProjectCard";

function ProjectContainer() {
  return (
    <>
      <div className="bg-[#ffdce1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d6eeff"
            fill-opacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,90.7C480,75,600,53,720,85.3C840,117,960,203,1080,202.7C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div
          id="projects"
          className="flex flex-col w-[100vw] px-4 bg-[#d6eeff]"
        >
          <span className="text-4xl font-bold text-black mx-8">
            Stuff I am building for fun ⭐️
          </span>
          <div className="grid gap-4 m-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-[90%]">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                link={project.link}
                githubLink={project.githubLink}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectContainer;
