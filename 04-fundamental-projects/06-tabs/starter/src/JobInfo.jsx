import React from "react";
import { v4 as uuidv4 } from "uuid";

import Duties from "./Duties";

const JobInfo = ({ job }) => {
  const { company, dates, duties, title } = job;
  const allDuties = duties.map((duty) => {
    return {
      id: uuidv4(),
      info: duty,
    };
  });

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={allDuties} />
    </article>
  );
};

export default JobInfo;
