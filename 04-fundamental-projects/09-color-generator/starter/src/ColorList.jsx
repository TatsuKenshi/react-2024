import React from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({ list, toast }) => {
  return (
    <section className="colors">
      {list.map((colorItem) => {
        const { hex, weight, type } = colorItem;
        const id = nanoid();
        return (
          <SingleColor
            key={id}
            hex={hex}
            weight={weight}
            type={type}
            toast={toast}
          ></SingleColor>
        );
      })}
    </section>
  );
};

export default ColorList;
