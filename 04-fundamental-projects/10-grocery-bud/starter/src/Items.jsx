import React from "react";
import Item from "./Item";

const Items = ({
  items,
  isRename,
  setIsRename,
  editID,
  setEditID,
  setItemName,
  setNewName,
  updateItem,
  removeItem,
}) => {
  return (
    <div className="items">
      {!items.length && (
        <div>
          <p>The list is empty. Add an item.</p>
        </div>
      )}

      {items.map((item) => {
        return (
          <Item
            key={item.id}
            {...item}
            isRename={isRename}
            setIsRename={setIsRename}
            editID={editID}
            setEditID={setEditID}
            setItemName={setItemName}
            setNewName={setNewName}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
