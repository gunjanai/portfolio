import React from "react";
import awards from "../../utils/constants/awards";
import AwardList from "./AwardList";

function Awards() {
  return (
    <div
      id="awards"
      className="flex flex-col justify-center my-32 w-[100vw] px-4 dark:text-white text-gray-900"
    >
      <h1 className="text-4xl font-bold text-black mx-8">
        Awards & Recognitions 🏆
      </h1>
      <div className="flex flex-wrap items-center justify-center">
        {awards.map((award, index) => (
          <AwardList
            key={index}
            name={award.name}
            description={award.description}
            issuedBy={award.issuedBy}
            issuedOn={award.issuedOn}
          />
        ))}
      </div>
    </div>
  );
}

export default Awards;
