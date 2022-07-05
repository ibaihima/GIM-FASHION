import React, {useState, useEffect} from 'react';
import ClothesList from './ClothesList';

function Sweaters( {handleAddToCart} ) {
    const [sweaters, setSweaters] = useState([]);

    useEffect(() => {
      fetch("/sweaters")
      .then(res => res.json())
      .then((sweatersData) => {
          setSweaters(sweatersData)
      })
    }, []);

    return(
        <div>
            <ClothesList clothes={sweaters} handleButtonClick={handleAddToCart}/>
        </div>
    )
}


export default Sweaters;