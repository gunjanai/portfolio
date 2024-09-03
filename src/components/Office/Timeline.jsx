import React from "react";
import Animate from "./Animate";

function Timeline({ data }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffe7d3"
          fill-opacity="1"
          d="M0,128L60,122.7C120,117,240,107,360,90.7C480,75,600,53,720,85.3C840,117,960,203,1080,202.7C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div
        id="work"
        className="flex flex-col justify-center w-[100vw] px-4 dark:text-white text-gray-900 bg-[#ffe7d3]"
      >
        <h1 className="text-4xl font-bold text-black mx-8">
          Professional Journey 🚀
        </h1>
        <div className=" min-h-[50vh] md:mx-auto ">
          {data.map((item, index) => (
            <Animate index={index} key={index}>
              <div
                className="flex my-16 md:flex-row flex-col md:items-center  group  top-0 md:w-max w-full "
                key={index}
              >
                <div className="pointer p-4 dark:bg-gray-900 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                  ⚫️
                </div>
                <div className="details max-w-2xl p-5 bg-gray-100 dark:bg-gray-900 rounded-md my-3">
                  <div className="flex justify-between text-md">
                    <div className="course-title">{item.name}</div>
                    <div className="location">{item.date}</div>
                  </div>
                  <div className="institution text-sm mt-4">
                    {item.description}
                  </div>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </>
  );
}

export default Timeline;
