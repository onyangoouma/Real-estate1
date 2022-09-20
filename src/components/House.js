import React from 'react';
import { useEffect, useState} from 'react';
import './house.css'
import { Link } from "react-router-dom";

function House() {
  const [houses, setHouses] = useState([]);

  const [isfetching, setisFetching] = useState(false)

  const getHouse = async()=>{

    const response = await fetch("http://localhost:9292/rents")

    const houses = await response.json()

    setHouses(houses)
    console.log(houses)

  }

 useEffect(() => {

 getHouse()

 setisFetching(false)

 }, [isfetching])

 const handleDelete = () => {
  fetch("http://localhost:9292/rents" + houses.id, {
    method: "DELETE",
  }).then(() => {
  
  })}

return (
  <div className='grid grid-cols-3'>
  {houses.map((house) => (
<div className="container">
      <div className="box">
        <div className="top">
          <img src={house.image_url} alt="house" />
          <span
            ><i className="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
          ></span>
        </div>
        <div className="bottom">
          <h3>{house.title}</h3>
          <p>
            Enchanting three bedrooms, three bath home with spacious one
            bedroom, one bath...
          </p>
          <div className="advants">
            <div>
             
              <span>bedroom</span>
              <div><i className="fas fa-th-large"> {house.bedroom}</i><span></span></div>
            </div>
            <div>
              <span>Bathroom</span>
              
              <div><i className="fas fa-shower">{house.bathroom}</i><span></span></div>
            </div>
            <div>
            {house.area}
              <span>Area</span>
              <div>
                <i className="fas fa-vector-square"></i>
                
                <span>size<span> {house.size} Sq Ft</span></span>
                
              </div>
            </div>
          </div>
          <div className="price">
            <span>For Sale</span>
            <span>price</span>
            {house.price}
          </div>
          <div>
          <i className="fa-regular fa-heart" />
          <button>
          <Link to="customform">Review</Link> 
          </button>
          
          </div>
        </div>
      </div>
      <button className="writeSubmit"onClick={handleDelete}> Delete</button>
    </div>

  
   
    )
    )}
    </div>
)
}
export default House












