import React from "react";

function AwardList({ name, description, issuedBy, issuedOn }) {
  return (
    <div
      className="flex flex-col justify-between shadow-md w-[90%] my-4 lg:w-[30%] mx-2 md:my-4 lg:my-12 md:w-[70%] md:h-44 p-4 cursor-pointer"
      onClick={() => {
        window.open(
          "https://www.linkedin.com/in/gunjan-sengar/details/honors/",
          "_blank"
        );
      }}
    >
      <h1 className="font-medium text-lg text-black">{name}</h1>
      <div className="w-[100%] items-center flex justify-between">
        <span className="font-thin text-xs text-black">{issuedBy}</span>
        <span className="font-thin text-xs text-black">{issuedOn}</span>
      </div>
      <h3 className="font-normal text-sm text-black">{description}</h3>
    </div>
  );
}

export default AwardList;
