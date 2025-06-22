import React from 'react';
import '../Components/styles/Header.css' // Assuming you have a CSS file for styling

const Header = () => {
    const image = 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png'
  return (
    <nav className="header-nav">
      <div className="header-logo">
        <img src={image} 
        alt="Food Express Logo" 
         />
      </div>
      <ul className="header-menu">
        <li><a href="#" className="header-link">Home</a></li>
        <li><a href="#" className="header-link">About Us</a></li>
        <li><a href="#" className="header-link">Contact Us</a></li>
        <li><a href="#" className="header-link">Cart</a></li>
      </ul>
    </nav>
  );
};

export default Header;