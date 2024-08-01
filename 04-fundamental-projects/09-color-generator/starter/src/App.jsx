import { useState } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import Form from "./Form";
import ColorList from "./ColorList";

const App = () => {
  const [pickedColor, setPickedColor] = useState("");
  const [list, setList] = useState([...new Values("#f15a1b").all(1)]);

  const updateColor = (color) => {
    let newList = [...new Values(color).all(1)];
    setList(newList);
    setPickedColor(color);
  };

  return (
    <main>
      <Form
        toast={toast}
        updateColor={updateColor}
        pickedColor={pickedColor}
        setPickedColor={setPickedColor}
      />
      <ColorList list={list} toast={toast} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
