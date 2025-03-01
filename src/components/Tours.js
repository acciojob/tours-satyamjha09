// Tours.js
import React from "react";
import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <section>
      <h1>Our Tours</h1>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
