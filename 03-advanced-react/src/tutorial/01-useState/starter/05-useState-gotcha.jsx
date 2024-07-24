import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
    console.log(count);
    // logs before the new render
  };

  const handleClick = () => {
    setTimeout(() => {
      setCount((oldCount) => {
        const newCount = oldCount + 1;
        return newCount;
      });
    }, 3000);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button type="button" className="btn" onClick={handleClick}>
        click
      </button>
    </div>
  );
};

export default UseStateGotcha;

// to update the state synchronously, pass a function to setState that receives the previous/current state as an argument and returns the new state.

// Useful if we need to update the state based on the previous state, or if we really need synchronous state updates.
