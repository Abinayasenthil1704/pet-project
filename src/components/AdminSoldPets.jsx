import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import "./AdminSoldPets.css";
import Popup from "./Popup";

const AdminSoldPets = () => {
  const [soldPets, setSoldPets] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("");

  useEffect(() => {
    const fetchSoldPets = async () => {
      try {
        const response = await fetch("https://pet-server-r9z4.onrender.com/api/admin/soldpets");
        const data = await response.json();
        setSoldPets(data);
       

      } catch (error) {
        console.error("Error fetching sold pets:", error);
      }
    };

    fetchSoldPets();
  });

  // Filter pets by search
  const filteredPets = soldPets.filter((pet) =>
    `${pet.name} ${pet.breed} ${pet.category}`.toLowerCase().includes(search.toLowerCase())
  );

  // Sort pets by field
  const sortedPets = [...filteredPets].sort((a, b) => {
    if (!sortField) return 0;
    if (sortField === "age") return a.age - b.age;
    return a[sortField].localeCompare(b[sortField]);
  });

  return (
    <div className="admin-sold-container">
      <Popup />
      <AdminNavbar />
      <h2 className="admin-sold-heading">Sold Pets</h2>

      {/* 🔍 Filter & Sort Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name, breed, category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setSortField(e.target.value)} value={sortField}>
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="breed">Breed</option>
          <option value="age">Age</option>
        </select>
      </div>

      <div className="sold-pet-grid">
        {sortedPets.length === 0 ? (
          <p>No sold pets found.</p>
        ) : (
          sortedPets.map((pet) => (
            <div className="sold-pet-card" key={pet._id}>
              {/* <img src={pet.imageUrl} alt={pet.name} className="sold-pet-image" /> */}
              <div className="sold-pet-details">
                <div className="sold-badge">Sold Out</div>
                <h3>{pet.name}</h3>
                <p><strong>Breed:</strong> {pet.breed}</p>
                <p><strong>Age:</strong> {pet.age}</p>
                {/* <p><strong>Category:</strong> {pet.category}</p>
                <p><strong>Description:</strong> {pet.description}</p> */}
                <p><strong>Sold At:</strong> {new Date(pet.soldAt).toLocaleString()}</p>
                
              </div>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminSoldPets;
