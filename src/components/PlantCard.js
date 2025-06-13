import React from "react";

function PlantCard({ plant, onUpdate }) {
  const {name, image, price, soldOut} = plant;

  const handleSoldOut = (id) => {
    const plantObj = {
      soldOut: true
    }
    fetch(`http://localhost:6001/plants/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(plantObj)
    })
    .then(response => response.json())
    .then((plant) => onUpdate(plant))
  }  

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
        <p>
        {soldOut ? <span className="sold-out">Sold Out</span> : `Price: ${price}`}
        </p>
      {soldOut ? (
        <button disabled>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => handleSoldOut(id)} >
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
