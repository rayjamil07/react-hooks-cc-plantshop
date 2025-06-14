import React, { useState } from "react";

function NewPlantForm({ onAdd }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');


  function plantForm (event) {
    event.preventDefault();

    const plantObj = {
    name: name,
    image: image,
    price: price
    };

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(plantObj)
    })
    .then(response => response.json())
    .then((plant) => {
      onAdd(plant)
      setName('')
      setImage('')
      setPrice('')
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={plantForm}>
        <input type="text" 
        name="name" 
        placeholder="Plant name" 
        value={name}
        onChange={(e) => setName(e.target.value)}/>
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}/>
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
