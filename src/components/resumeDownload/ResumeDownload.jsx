import React from "react";

function ResumeDownload() {
  return (
    <div className="my-4 mb-16 lg:my-0 lg:mb-0">
      <a
        href="/resume/GunjanSengar_Resume.pdf"
        download="GunjanSengar_Resume.pdf"
        className="flex items-center font-lobster text-3xl mx-4 px-4 rounded-lg cursor-pointer border border-gray-500"
      >
        <img
          src="https://img.icons8.com/?size=100&id=86327&format=png&color=000000"
          alt="download"
          className="w-7 mr-3"
          loading="lazy"
        />
        Resume
      </a>
    </div>
  );
}

export default ResumeDownload;
