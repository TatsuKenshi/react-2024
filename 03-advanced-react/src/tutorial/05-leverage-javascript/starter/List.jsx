import React from "react";
import Person from "./Person";
import { people } from "../../../data";

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
};

export default List;
