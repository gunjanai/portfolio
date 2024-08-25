import React from "react";
import Reveal from "./Reveal";

function Home() {
  return (
    <div className="flex flex-col justify-center my-16 w-full md:flex-row lg-flex-row">
      <img
        src="/images/profile.jpg"
        className="w-full max-w-md mx-auto object-cover md:mx-8 lg:mx-8"
        loading="lazy"
        alt="Profile picture"
      />
      <div className="flex flex-col justify-center mx-8 ">
        <Reveal>
          <span className="font-lobster font-medium text-7xl">
            👋 Hi, I'm Gunjan.
          </span>
        </Reveal>
        <Reveal>
          <span className="font-lobster font-medium text-3xl">
            Creating Websites Everyday.
          </span>
        </Reveal>
        <Reveal>
          <span className="font-lobster my-4 font-medium text-3xl">
            I love turning ideas into fun, interactive, and visually appealing
            web experiences.{" "}
          </span>
        </Reveal>
        <Reveal>
          <span className="font-lobster my-4 font-medium text-3xl">
            Let's build something awesome together!
          </span>
        </Reveal>
      </div>
    </div>
  );
}

export default Home;
