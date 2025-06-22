import React from 'react';
import './styles/CardComponent.css';

const CardComponent = () => {
    const image = 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png'
    const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

  return (
    <div className="card">
      <img
        // src="https://via.placeholder.com/300x180"
        src={image}
        alt="Food"
        className="card-img"
      />
      <div className="card-content">
        <h2 className="card-title">Tag Name</h2>
        <div className="card-tags">
          <span className="card-tag">Tag 1</span>
          <span className="card-tag">Tag 2</span>
          <span className="card-tag">Tag 3</span>
        </div>
        <div className="card-details">
          <span className="card-price">$12.99</span>
          <span className="card-rating">★ 4.5</span>
          <span className="card-time">30 min</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;