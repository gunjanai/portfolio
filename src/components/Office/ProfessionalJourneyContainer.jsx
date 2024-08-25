import React from "react";
import Timeline from "./Timeline";

const projectData = [
  {
    name: "SiMeta Builder",
    description:
      "A React Three Fiber application to show real time data in a 3-D simulation environment of separate clusters in an industry, using web sockets, threejs along with rendering 3-D models.",
    date: "Feb 24 - Current",
  },
  {
    name: "Always Encrypted Cloud-native Services & Confidential Computing",
    description:
      "The solution provides a zero trust system on cloud, includes remote attestation of hardware provided by Azure and container attestation for Secure key release mechanism.",
    date: "May 23 - Mar 2024",
  },
  {
    name: "Passwordless Authentication (FIDO2)",
    description:
      "A production ready, ready-to-integrate web based solution for enhancing security to current infrastructure of web applications. The solution implements a zero trust secure access provider which uses windows hello, passkeys like Yubi Key or fingerprint, face lock features.",
    date: "Apr 22 - Oct 2022",
  },
  {
    name: "myIndustry Automotive",
    description:
      "myIndustry for Automotive aims to drive Automotive OEMs in their Aftersales Transformation journeys. A set of pre configured use cases tackling client challenges to accelerate benefits realization.",
    date: "July 2021 - Mar 2022",
  },
  {
    name: "myIndustry Smart Maintenance Advisor",
    description:
      "SMA is an intelligent, trusted digital advisor which uses predictive analytics to proactively monitor and capture the insights and identify any futuristic downtimes.",
    date: "April 2021 - July 2021",
  },
  {
    name: "myIndustry Smart Collateral & Simcorp RTM Standardization Cockpit",
    description:
      "Smart Collateral is a collateral management tool providing predictive analytics for early fraud detection in customers in capital markets. Simcorp is an Accenture Innovation which provides an filtered enabled RTM standardization cockpit to Business Analysts decreasing the requirement gathering time by 60%",
    date: "June 2020 - March 2021",
  },
  {
    name: "myIndustry Relationship Manager Dashboard",
    description:
      "Created web crawlers to sweep client related news from various websites for data lake creation",
    date: "Nov 2019 - April 2020",
  },
];

function ProfessionalJourneyContainer() {
  return (
    <>
      <Timeline data={projectData} />
    </>
  );
}

export default ProfessionalJourneyContainer;
