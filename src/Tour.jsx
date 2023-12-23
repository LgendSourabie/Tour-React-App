import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="single-tour">
      <img className="img" src={image} alt={name} />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 300)}... `}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read less" : "Read more"}
          </button>
        </p>

        <button
          type="button"
          className="btn delete-btn btn-block"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
      <p className="tour-price">$ {price}</p>
    </div>
  );
};

export default Tour;
