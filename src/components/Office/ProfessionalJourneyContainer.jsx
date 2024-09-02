import React from "react";
import Timeline from "./Timeline";
import { projectData } from "../../utils/constants/work-experience";

function ProfessionalJourneyContainer() {
  return (
    <>
      <Timeline data={projectData} />
    </>
  );
}

export default ProfessionalJourneyContainer;
