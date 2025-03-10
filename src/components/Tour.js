import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="single-tour" data-testid={`tour-${id}`}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p id={`tour-item-para-${id}`}>
          {showMore ? info : `${info.substring(0, 200)}${info.length > 200 ? '...' : ''}`}
          {info.length > 200 && (
            <button 
              onClick={() => setShowMore(!showMore)}
              id={`see-more-${id}`}  // Changed ID to match test requirements
            >
              {showMore ? 'Show less' : 'See more'}
            </button>
          )}
        </p>
        <button 
          className="delete-btn" 
          onClick={() => removeTour(id)}
          id={`delete-btn-${id}`}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;