import React from "react";

function PlantCard({ plant }) {
  const {name, image, price} = plant;
  const [stock, setStock] = React.useState(false)

  function click () {
    setStock((stock) => !stock)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary" onCLick={click}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
