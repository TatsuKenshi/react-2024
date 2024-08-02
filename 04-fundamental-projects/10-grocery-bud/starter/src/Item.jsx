import React from "react";
import { toast } from "react-toastify";

const Item = ({
  id,
  name,
  completed,
  isRename,
  setIsRename,
  editID,
  setEditID,
  setItemName,
  setNewName,
  updateItem,
  removeItem,
}) => {
  const itemIsBeingEdited = editID === id ? true : false;

  const renameItemHandler = () => {
    if (isRename) {
      if (isRename && editID !== id) {
        toast.error("Error! Can't edit two items at the same time");
        return;
      }
      setIsRename(false);
      setEditID("");
      setItemName("");
    } else {
      if (completed) {
        toast.error("Error!. Can't rename a checked off item.");
        return;
      }
      setIsRename(true);
      setEditID(id);
      setItemName(name);
      setNewName(name);
    }
  };

  return (
    <>
      <article className="single-item">
        <input
          style={{ marginLeft: "10px" }}
          type="checkbox"
          checked={completed}
          disabled={isRename}
          onChange={() => {
            updateItem(id);
          }}
        />

        <span
          style={{
            textDecoration: completed === true && "line-through",
          }}
        >
          {name}
        </span>
        <div>
          <button
            style={{ backgroundColor: itemIsBeingEdited ? "magenta" : null }}
            className="btn"
            onClick={renameItemHandler}
          >
            {itemIsBeingEdited ? "cancel" : "rename"}
          </button>
          <button
            style={{ marginLeft: "10px" }}
            className="btn"
            onClick={() => {
              if (isRename) {
                toast.error("Error! Can't delete items while in edit mode.");
                return;
              }
              removeItem(id);
            }}
          >
            delete
          </button>
        </div>
      </article>
      <hr />
    </>
  );
};

export default Item;
