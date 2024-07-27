import { useState } from "react";

const ShortCircuitOverview = () => {
  const [conditionOne, setConditionOne] = useState(true);
  const [conditionTwo, setConditionTwo] = useState(false);
  return (
    <div>
      {/* if conditionOne is true, show me Annie */}
      {/* it shows Annie */}
      <h2>AND Operator for True: {conditionOne && "Annie"}</h2>
      {/* if conditionOne is true, show me conditionOne */}
      {/* it shows conditionOne */}
      <h2>OR Operator for True: {conditionOne || "Annie"}</h2>

      {/* if conditionTwo is true, show me Annie */}
      {/* it shows conditionTwo */}
      <h2>AND Operator for False: {conditionTwo && "Annie"}</h2>
      {/* if conditionTwo is true, show me conditionTwo */}
      {/* it shows Annie */}
      <h2>OR Operator for False: {conditionTwo || "Annie"}</h2>
    </div>
  );
};
export default ShortCircuitOverview;

// In JS, a value is considered "truthy" if it evaluates to true when used in a boolean concept. On the other hand, values which default to "false" in a boolean evaluation are considered "falsy".

// There are six "falsy" values:

// // false
// // 0 (zero)
// // "" (empty string)
// // null
// // undefined
// // NaN (not a number

// In JS, short-circuit evaluation allows us to use logical operators (such as && and ||) to perform conditional evaluation in a concise way.

// The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first one is "truthy"

// The || (logical OR) returns the first operand if it is "truthy", or the second if the first one is "falsy"

// Short-circuit evaluation is useful when we want to perform a certain action only if a certain condition is met, or if we want to return a default value if a condition is not met.
