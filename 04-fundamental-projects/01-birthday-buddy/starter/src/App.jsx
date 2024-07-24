import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} setPeople={setPeople} />
        {people.length < 1 ? null : (
          <button
            type="button"
            className=" btn btn-block"
            onClick={() => {
              setPeople([]);
            }}
          >
            clear list
          </button>
        )}
      </section>
    </main>
  );
};
export default App;
