import React, { useState } from "react";

const Form = ({ pickedColor, toast, updateColor }) => {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.length !== 7 || !color.startsWith("#")) {
      if (!color.length) {
        toast.error("can't submit an empty value");
      } else {
        toast.error("pick a valid hex color");
      }
      setColor("#f15a1b");
      updateColor("#f15a1b");
    } else {
      setColor(color);
      updateColor(color);
      toast.success("Success");
    }
  };

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          name="color"
          id="color"
          value={pickedColor || "#f15a1b"}
          onChange={handleChange}
        />
        <input
          type="text"
          name="text"
          id="text"
          value={color}
          placeholder="#f15a1b"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: pickedColor || "#f15a1b" }}
        >
          generate
        </button>
      </form>
    </section>
  );
};

export default Form;
