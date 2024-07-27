import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
  };

  sayHello();

  useEffect(() => {
    console.log("hello from useEffect!");
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;

// useEffect allows us to perform side effects in function componenets, such as subscriptions, data fetching, direct updates of the DOM, event listeners, timers, etc.

// useEffect accepts two arguments
// // 1 - callback function
// // 2 - dependency array (optional)

// useEffect, by default, runs on each render (mount + rerenders)

// callback function can't return a promise (can't be async)
// a function inside the callback can be async

// if dep array is empty, useEffect runs only on initial render
// if there is no dep array, useEffect runs on every render
