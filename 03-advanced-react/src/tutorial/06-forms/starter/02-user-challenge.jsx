import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [isError, setIsError] = useState("");
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setIsError("enter a valid username");
      setTimeout(() => {
        setIsError("");
      }, 2000);
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name,
    };

    const newUsers = [...users, newUser];
    setUsers(newUsers);
    setName("");
  };

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const clearList = () => {
    setUsers([]);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4> {isError || "Add User"}</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name={name}
            value={name}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <div>
        {users.map((user) => {
          const { id, name } = user;
          return (
            <div key={id}>
              <h4>{name} </h4>
              <button
                className="btn"
                onClick={() => {
                  removeUser(id);
                }}
              >
                remove
              </button>
            </div>
          );
        })}

        {users.length < 1 && <h4>Oops! List empty! Add a user.</h4>}

        {users.length > 0 && (
          <button
            type="button"
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={clearList}
          >
            clear list
          </button>
        )}
      </div>
    </div>
  );
};
export default UserChallenge;
