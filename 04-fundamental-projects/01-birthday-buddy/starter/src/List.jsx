import React from "react";
import Person from "./Person";

const List = ({ people, setPeople }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <Person
            people={people}
            person={person}
            setPeople={setPeople}
            key={person.id}
          />
        );
      })}
    </section>
  );
};

export default List;
