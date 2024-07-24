import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const [renderCount, setRenderCount] = useState(1);
  console.log(renderCount);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    setRenderCount(renderCount + 1);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() => {
                removeItem(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          setPeople([]);
          setRenderCount(renderCount + 1);
        }}
        className="btn"
      >
        clear list
      </button>
    </div>
  );
};

export default UseStateArray;
