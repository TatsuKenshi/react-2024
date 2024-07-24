import React from "react";

const Person = ({ people, person, setPeople }) => {
  const { name, age, image, id } = person;

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <article className="person">
      <img
        src={image}
        alt={name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
        }}
      />
      <div>
        <h5>
          {name} turns
          <span style={{ color: "magenta" }}> {age}</span> today
        </h5>
        <button
          type="button"
          className="btn btn-hipster"
          style={{ marginTop: "10px" }}
          onClick={() => {
            removePerson(id);
          }}
        >
          remove
        </button>
      </div>
    </article>
  );
};

export default Person;
