import React from "react";
import awards from "../../utils/constants/awards";
import AwardList from "./AwardList";

function Awards() {
  return (
    <>
      <div className="bg-[#d6eeff]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e6deff"
            fill-opacity="1"
            d="M0,32L60,42.7C120,53,240,75,360,96C480,117,600,139,720,160C840,181,960,203,1080,202.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div
          id="awards"
          className="flex flex-col justify-center w-[100vw] px-4 dark:text-white text-gray-900 bg-[#e6deff]"
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
      </div>
    </>
  );
}

export default Awards;
