import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const { id, info } = duty;
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
