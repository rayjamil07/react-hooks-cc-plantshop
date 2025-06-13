import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdate }) {
  const updatedPlants = plants.map((plant) => {
    return <PlantCard
    key={plant.id}
    plant={plant}
    onUpdate={onUpdate}
    />
  })

  return (
    <ul className="cards">{updatedPlants}</ul>
  );
}

export default PlantList;
