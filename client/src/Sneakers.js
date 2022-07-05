import React, { useState, useEffect } from 'react';
import ClothesList from './ClothesList';

function Sneakers( {handleAddToCart} ) {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        fetch("/shoes")
        .then(res => res.json())
        .then((sneakersData) => {
            setSneakers(sneakersData)
        })
    }, []);

    return(
        <div>
            <div className= "filter">
            </div>
            <div> 
            <ClothesList clothes={sneakers} handleButtonClick={handleAddToCart}/>
            </div>
        </div>
    )
}


export default Sneakers;