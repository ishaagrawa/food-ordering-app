import React, { useState } from 'react'
import data from '../assest/data.js'
import '../../src/Components/styles/Body.css';
import { CardComponent } from './CardComponent.js';
// import { FOOD_ORDERING_API_URL } from '../ApiUrl';
import axios from 'axios';


// axios.get(FOOD_ORDERING_API_URL)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err)=>{
//     console.log("fetch  error", err);
    
// })
let myResData = 

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

const Body = () => {
    const [filteredData, setFilteredData] = useState(myResData);
    const [searchTerm, setSearchTerm] = useState('');
    const searchFilter = () =>{
        console.log("searchFilter called");
        const filtered = myResData.filter((res) =>
        res.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredData(filtered);
    }
    return(
        <>
        <input value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button onClick={() => searchFilter()}>Search</button>
        <button className='filter-btn' onClick={()=>
            {
                myResData = myResData.filter((res) => res.rating > 4.0)
                setFilteredData(myResData);
            }            
        }>Filter button 4+ rating</button>
            <div className="body">
                {filteredData.map((restaurant) => (
                    <CardComponent key={restaurant.id} data={restaurant} />
                ))}
            </div>
        </>
    )
}

export default Body;