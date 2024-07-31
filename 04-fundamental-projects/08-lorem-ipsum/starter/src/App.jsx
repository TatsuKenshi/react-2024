import { useState } from "react";
import { nanoid } from "nanoid";
import text from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const myCount = parseInt(count);
    setParagraphs(text.slice(0, myCount));
    setCount(1);
  };

  return (
    <section className="section-center">
      <h4>Tired of boring old lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">paragraphs:</label>
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          min={1}
          step={1}
          max={8}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          submit
        </button>
      </form>

      <div className="lorem-text">
        {paragraphs.map((paragraph) => {
          const id = nanoid();
          return <p key={id}>{paragraph}</p>;
        })}
      </div>
    </section>
  );
};
export default App;
