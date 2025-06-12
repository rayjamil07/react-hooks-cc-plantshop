import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  
  // const API = 'http://localhost:6001/plants';

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then((plants) => setPlants(plants))
  }, [])

  const addPlant = (plantObj) => {
    setPlants([...plants,plantObj])
  }

 const updatedPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

//  const deletePlant = (id) => {
//   const updatedPlants = plants.filter((plant) => plant.id !== id)
//   setPlants(updatedPlants)
//  }

  return (
    <main>
      <NewPlantForm onAdd={addPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={updatedPlants}/>
    </main>
  );
}

export default PlantPage;
 