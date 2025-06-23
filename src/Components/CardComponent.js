import React from 'react';
import './styles/CardComponent.css';


export const CardComponent = ({data}) => {
    // const image = 
    // 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png'
    const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
// console.log(data.image);

  return (
    <div className="card">
      <img
        src={`${url}+ ${data?.image}`}
        alt="Food"
        className="card-img"
      />
      <div className="card-content">
        <h2 className="card-title">{data?.name}</h2>
        <div className="card-tags">
          {data?.tags && data.tags.split(', ').map((tag, idx) => (
            <span className="card-tag" key={idx}>{tag}</span>
          ))}
        </div>
        <div className="card-details">
          <span className="card-price">${data?.price}</span>
          <span className="card-rating">★ {data?.rating}</span>
          <span className="card-time">{data?.deliveryTime} min</span>
        </div>
      </div>
    </div>
  );
};
