import React from "react";
import { toast } from "react-toastify";

const Form = ({
  isRename,
  editID,
  itemName,
  setItemName,
  newName,
  addItem,
  renameItem,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // adding an item
    if (!isRename) {
      if (!itemName) {
        toast.error("Error! Can't submit an empty value.");
        return;
      } else {
        addItem();
      }
      return;
    }

    // renaming an item
    if (isRename) {
      if (!itemName) {
        toast.error("Error! Can't rename. Enter a valid name.");
        return;
      } else {
        renameItem(editID, newName, itemName);
      }
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          className="form-input"
          placeholder={isRename ? "provide a new name" : "enter a new item"}
          type="text"
          name="item"
          id="item"
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: itemName ? "limegreen" : "indianred" }}
        >
          {isRename ? "rename" : "submit"}
        </button>
      </div>
    </form>
  );
};

export default Form;
