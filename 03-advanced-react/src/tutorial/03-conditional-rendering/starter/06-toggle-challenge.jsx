import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);

  const toggleValue = () => {
    setValue(!value);
  };

  return (
    <div>
      <button type="button" className="btn" onClick={toggleValue}>
        Toggle Value
      </button>
      {value ? (
        <div style={{ backgroundColor: "green" }}>
          <h2>The value is true</h2>
        </div>
      ) : (
        <div style={{ backgroundColor: "red" }}>
          <h2>The value is false</h2>
        </div>
      )}
    </div>
  );
};

export default ToggleChallenge;
