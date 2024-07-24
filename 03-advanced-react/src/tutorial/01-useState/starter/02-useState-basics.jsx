import React, { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  // const [name, setName] = React.useState("john");

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button type="button" className="btn" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;

// // // useState - general

// useState is there to preserve the data between renders
// useState returns an array with two elements: the current state value, and an update function
// useState accepts default value as an argument
// state update triggers a re-render

// // // Renders and re-renders

// In react, the initial render is the first time the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. It is also known as "mounting" of the components.

// Re-renders happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

// There are a few ways to trigger a re-render in react:
//
// // By changing the component's state or props. When either of these change, react will re-render the component to reflect the changes.
//
// // When the parent element re-renders, even if the component's state or props have not changed.
//
// In a nutshell: component state, component prop, and parent component changes trigger re-renders.

// // // General rules of hooks

// All hooks start with lowercase "use" (react and custom hooks)
// Component must be uppercase for hooks to work
// hook must be invoked inside of the component body
// hook can't be called conditionally (no hooks inside if statements or conditional renders)
// setState functions don't update state immediately (they're asynchronous). State is updated on the next render.
