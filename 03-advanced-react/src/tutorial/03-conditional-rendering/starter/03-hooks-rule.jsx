import { useState, useEffect } from "react";

const Example = () => {
  const [condition, setCondition] = useState(true);

  if (condition) {
    // won't work
    // hooks can't be called conditionally
    const [state, setState] = useState(false);
  }

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // this will also fail
  // this won't log because useEffect has to be above the first return.
  // also, the second return will fail.
  useEffect(() => {
    console.log("hello there");
  }, []);
  return <h2>example</h2>;
};

export default Example;
