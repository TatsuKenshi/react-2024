import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 25,
    job: "developer",
  });

  const toggleUser = () => {
    if (person.name === "peter") {
      setPerson({
        name: "john",
        age: 30,
        job: "designer",
      });
    }
    if (person.name === "john") {
      setPerson({
        name: "peter",
        age: 25,
        job: "developer",
      });
    }
  };

  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.job}</p>
      <button type="button" className="btn" onClick={toggleUser}>
        toggle user
      </button>
    </div>
  );
};

export default UseStateObject;

// In react, "batching" refers to the process of grouping multiple state updates into a single update. This can be useful in certain cases because it allows react to optimize the rendering of the components by minimizing the number of DOM updates that it has to perform.

// By default, react uses "auto-batching" to group state updates that occur within the same event loop into a single update. This means that if you call the state update function multiple times in a short period of time, react will only perform a single re-render for all the updates.

// React 18 ensures that the state updates invoked from any location will be batched by default. This will batch state updates, including native event handlers, async operations, timeouts, and intervals.
