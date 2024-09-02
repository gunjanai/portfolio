import React from "react";

function ProjectCard({ name, description, image, link, githubLink }) {
  const handleProjectNav = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="flex flex-col border border-gray-400 rounded-lg p-8 cursor-pointer"
      onClick={handleProjectNav}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">{name}</h1>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/github.png"
          alt="github"
          className=""
          onClick={() => {
            window.open(githubLink, "_blank");
          }}
        />
      </div>
      <img src={image} alt={name} className="my-4" />
      <p className="text-md font-thin">{description}</p>
    </div>
  );
}

export default ProjectCard;
