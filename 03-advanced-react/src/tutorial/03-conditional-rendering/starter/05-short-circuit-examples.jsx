import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default value"}</h2>
      {text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* {!text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h4>Hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Whatever return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;

// Ternary operator in JS is a way to concisely express a simple conditional statement. It is often called the "conditional operator" or the "ternary conditional operator"

// if condition is truthy, the operator will return expression1. Id condition is falsy, it will return expression2.

// {condition ? expression1 : expression2}
