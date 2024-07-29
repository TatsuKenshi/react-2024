import React from "react";
import avatar from "../../../assets/default-avatar.svg";

const Person = ({ name, nickName = "No nicknames", sister, images, age }) => {
  const img = images?.[0]?.small?.url ?? avatar;

  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
      <p>Sister : {sister || "No sisters"}</p>
      {age && <p>{age}</p>}
    </div>
  );
};

export default Person;
