import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/AdminDashboard.css'

function AdminDashBoard() {
  const [foodItems, setFoodItems] = useState([]);
  const [newFood, setNewFood] = useState({
    name: "",
    price: "",
    imageUrl: "",
  });

  useEffect(() => {
    axios.get("/api/fooditems")
      .then(response => setFoodItems(response.data))
      .catch(error => console.error("There was an error fetching the food items!", error));
  }, []);

  const addFoodItem = () => {
    axios.post("/api/fooditems", newFood)
      .then(response => setFoodItems([...foodItems, response.data]))
      .catch(error => console.error("There was an error adding the food item!", error));
  };

  const removeFoodItem = (id) => {
    axios.delete(`/api/fooditems/${id}`)
      .then(() => setFoodItems(foodItems.filter(item => item.id !== id)))
      .catch(error => console.error("There was an error removing the food item!", error));
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="add-food-form">
        <h3>Add New Food Item</h3>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={newFood.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newFood.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newFood.imageUrl}
          onChange={handleChange}
        />
        <button onClick={addFoodItem}>Add Food Item</button>
      </div>

      <div className="food-items-list">
        <h3>Current Food Items</h3>
        <ul>
          {foodItems.map((item) => (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price} INR</p>
              <button onClick={() => removeFoodItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashBoard;