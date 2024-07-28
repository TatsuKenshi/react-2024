import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className={`job-btn ${currentItem === index ? "active-btn" : null}`}
            key={job.id}
            onClick={() => {
              setCurrentItem(index);
            }}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
