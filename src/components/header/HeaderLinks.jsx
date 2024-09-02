import React from "react";
import ResumeDownload from "../resumeDownload/ResumeDownload";

function HeaderLinks() {
  return (
    <>
      <a href="#work" className="font-lobster my-4 text-3xl mx-4 lg:my-0">
        Work
      </a>
      <a href="#skills" className="font-lobster my-4 text-3xl mx-4 lg:my-0">
        Skills
      </a>
      <a href="#projects" className="font-lobster my-4 text-3xl mx-4 lg:my-0">
        Projects
      </a>
      <a href="#awards" className="font-lobster my-4 text-3xl mx-4 lg:my-0">
        Awards
      </a>
      <a href="#contact" className="font-lobster my-4 text-3xl mx-4 lg:my-0">
        Contact
      </a>
      <ResumeDownload />
    </>
  );
}

export default HeaderLinks;
