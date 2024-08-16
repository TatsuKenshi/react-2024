import React from "react";

const slowFunction = () => {
  let value = 0;
  for (let i = 0; i < 10000000000; i++) {
    value += 1;
  }

  return value;
};

export default slowFunction;
