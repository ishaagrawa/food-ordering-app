import React, { useState } from 'react'
import Header from './Header'
// import CardComponent from './CardComponent';
import data from '../assest/data.js'
import '../../src/Components/styles/Body.css';
import { CardComponent } from './CardComponent.js';

const myResData = 
data && data.restaurants 
?
 data.restaurants.map((item) => ({
    id: item.info.id,
    name: item.info.name,
    image: item.info.cloudinaryImageId,
    rating: item.info.avgRating,
    deliveryTime: item.info.sla?.deliveryTime,
    tags: item.info.cuisines.join(', '),
    price: item.info.costForTwo,
    address: item.info.locality,
    area: item.info.areaName,
})) 
: [];

const Body = () => {
    return(
        <>
            <Header/>
            <div className="body">
                {myResData.map((restaurant) => (
                    <CardComponent key={restaurant.id} data={restaurant} />
                ))}
            </div>
        </>
    )
}

export default Body;