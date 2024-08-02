import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import Form from "./Form";
import Items from "./Items";
import { data } from "./data";

const startingItems = () => {
  if (!localStorage.getItem("items")) {
    localStorage.setItem("items", JSON.stringify(data));
  }
};
startingItems();

const starterList = JSON.parse(localStorage.getItem("items") || "[]");

const App = () => {
  const [items, setItems] = useState(starterList);
  const [isRename, setIsRename] = useState(false);
  const [editID, setEditID] = useState("");
  const [itemName, setItemName] = useState("");
  const [newName, setNewName] = useState("");

  const stateResets = () => {
    setIsRename(false);
    setEditID("");
    setItemName("");
  };

  const addItem = () => {
    const newItem = {
      id: nanoid(),
      completed: false,
      name: itemName,
    };
    const newItems = [...items, newItem];
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
    stateResets();
    toast.success("Success! Item added to the list.");
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
    stateResets();

    if (newItems.length < 1) {
      toast.error("Oops! You removed the last item.");
    } else {
      toast.error("Success! Item removed.");
    }
  };

  const updateItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
    stateResets();
    toast.success("Success! Item edited.");
  };

  const renameItem = (id, newName, itemName) => {
    if (itemName === newName) {
      toast.error("Error! Provide a different name.");
      return;
    }
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, name: itemName };
        return newItem;
      }
      return item;
    });
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
    stateResets();
    setNewName("");
    toast.success("Success! Item renamed.");
  };

  const clearList = () => {
    if (isRename) {
      toast.error("Error! Can't clear the list while in edit mode.");
      return;
    }
    if (items.length > 0) {
      const newItems = [];
      localStorage.setItem("items", JSON.stringify(newItems));
      setItems(newItems);
      stateResets();
      toast.error("Oops! You have emptied the list.");
    }
    return;
  };

  return (
    <section className="section-center">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Grocery List
      </h2>
      <Form
        isRename={isRename}
        // setIsRename={setIsRename}
        editID={editID}
        // setEditID={setEditID}
        itemName={itemName}
        setItemName={setItemName}
        newName={newName}
        // setNewName={setNewName}
        addItem={addItem}
        renameItem={renameItem}
      />
      <Items
        items={items}
        isRename={isRename}
        setIsRename={setIsRename}
        editID={editID}
        setEditID={setEditID}
        setItemName={setItemName}
        setNewName={setNewName}
        updateItem={updateItem}
        removeItem={removeItem}
      />
      <ToastContainer position="top-center" />
      <button
        className="btn btn-block"
        style={{ marginTop: "1rem" }}
        onClick={clearList}
      >
        Clear List
      </button>
    </section>
  );
};

export default App;
