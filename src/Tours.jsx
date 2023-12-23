import Tour from "./Tour";
import { useState } from "react";

const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <h3 className="title">Our Tours</h3>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </>
  );
};

export default Tours;
