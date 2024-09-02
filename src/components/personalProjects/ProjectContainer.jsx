import React from "react";
import projects from "../../utils/constants/projects";
import ProjectCard from "./ProjectCard";

function ProjectContainer() {
  return (
    <>
      <div id="projects" className="flex flex-col my-32 w-[100vw] px-4">
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
    </>
  );
}

export default ProjectContainer;
