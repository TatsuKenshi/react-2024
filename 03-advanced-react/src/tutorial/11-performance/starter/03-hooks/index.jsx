import { useState, useCallback, useMemo } from "react";
import { data } from "../../../../data";
import List from "./List";
import slowFunction from "./slowFunction";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;

// React.memo(ComponentName) method returns a memoized component, thus lowering the number of re-renders.
// It checks whether the props of a component higher on the DOM tree have changed. If they haven't, it will prevent that component's re-render.

// useCallback hook allows us to memoize functions. It takes two arguments: function that's being memoized and a dependency array. useCallback returns a memoized version of the function that only changes if one of the values in the dependency array change.

// useMemo hook is used to memoize a value. It takes two arguments - the function that returns the data we want to memoize and a dependency array. The hook will return the memoized value that will change only if one of the values in the dependency array changes.
