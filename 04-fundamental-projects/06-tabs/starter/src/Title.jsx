import React from "react";

const Title = ({ text }) => {
  return (
    <div className="title" style={{ marginTop: "2rem" }}>
      <h2>{text || "Default Title"}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
