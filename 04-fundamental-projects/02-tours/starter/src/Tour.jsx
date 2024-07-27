import React, { useState } from "react";

const Tour = ({ tour, tours, setTours }) => {
  const { id, name, info, image, price } = tour;
  const [infoLength, setInfoLength] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {infoLength ? info : `${info.substring(0, 200)}...`}
          <button
            className="info-btn"
            onClick={() => {
              setInfoLength(!infoLength);
            }}
          >
            {infoLength ? "Show Less" : "Read More"}
          </button>
        </p>

        <button
          onClick={() => removeTour(id)}
          className="btn btn-block delete-btn"
        >
          remove tour
        </button>
      </div>
    </article>
  );
};

export default Tour;
