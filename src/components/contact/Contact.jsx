import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-between h-44 w-full px-4 text-gray-900"
    >
      <div className="flex flex-col">
        <h1 className="text-4xl font-lobster font-bold text-black mx-8">
          Gunjan Sengar
        </h1>
        <span className="font-normal text-sm mx-9 my-6">
          Thanks for reading!
        </span>
      </div>
      <div className="flex flex-col mr-16">
        <div className="flex">
          <img
            src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=000000"
            onClick={() => window.open("https://x.com/gunjansengar1", "_blank")}
            alt="twitter"
            className="w-12 cursor-pointer"
          />
          <img
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/gunjan-sengar/",
                "_blank"
              )
            }
            alt="twitter"
            className="w-12 cursor-pointer"
          />
          <img
            src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
            onClick={() =>
              (window.location.href = "mailto:sengargunjan26@gmail.com")
            }
            alt="twitter"
            className="w-12 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
