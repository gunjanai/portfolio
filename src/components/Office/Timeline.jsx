import React from "react";
import Animate from "./Animate";

function Timeline({ data }) {
  return (
    <div
      id="work"
      className="flex flex-col justify-center my-32 w-[100vw] px-4 dark:text-white text-gray-900"
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
  );
}

export default Timeline;
