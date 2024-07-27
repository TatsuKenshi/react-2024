import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  console.log("render");

  const toggleValue = () => {
    setValue(!value);
  };

  return (
    <div>
      <button className="btn" onClick={toggleValue}>
        toggle
      </button>
      {value && <SecondComponent />}
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // some logic
    };
    window.addEventListener("scroll", someFunc);

    return () => {
      window.removeEventListener("scroll", someFunc);
    };
  }, []);
  return <h2>I'm the second component</h2>;
};

export default CleanupFunction;

// cleanup function runs on re-render, but before the useEffect.
// data fetching is better done with libraries:
// react query, rtk (redux toolkit) query, swr, next.js...
