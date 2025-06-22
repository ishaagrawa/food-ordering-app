import React from 'react'
import Header from './Header'
import CardComponent from './CardComponent';

const Body = () => {
    return(
<>
        <Header/>
        <h1>Food Ordering App</h1>
        <p>Order your favorite food online!</p>
        <div>
            {/* <p>Body</p> */}
            <CardComponent/>
        </div>
</>
    )
}

export default Body;