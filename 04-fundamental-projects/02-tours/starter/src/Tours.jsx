import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, setTours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return (
            <Tour tour={tour} tours={tours} setTours={setTours} key={tour.id} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
