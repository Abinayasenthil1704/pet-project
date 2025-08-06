import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import AdminNavbar from "./AdminNavbar";
import "./AdminPets.css";

const AdminPets = () => {
  const [showQR, setShowQR] = useState(false);
  const [showAddPet, setShowAddPet] = useState(false);
  const [pets, setPets] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  const fetchPets = async () => {
    try {
      const res = await fetch("https://pet-server-r9z4.onrender.com/api/admin/pets");
      const data = await res.json();
      setPets(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching pets:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this pet listing?")) return;
    try {
      await fetch(`https://pet-server-r9z4.onrender.com/api/admin/pets/${id}`, {
        method: "DELETE",
      });
      setPets(pets.filter((pet) => pet._id !== id));
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  const handleMarkAsSold = async (pet) => {
    const confirmSell = window.confirm(`Mark ${pet.name} as sold?`);
    if (!confirmSell) return;

    try {
      const res = await fetch("https://pet-server-r9z4.onrender.com/api/admin/soldpets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: pet.name,
          breed: pet.breed,
          age: pet.age,
          category: pet.category,
          description: pet.description,
          image: pet.image,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || "Failed to mark as sold.");
        return;
      }

      const deleteRes = await fetch(`https://pet-server-r9z4.onrender.com/api/admin/pets/${pet._id}`, {
        method: "DELETE",
      });

      if (!deleteRes.ok) {
        const errorData = await deleteRes.json();
        alert(errorData.message || "Failed to delete pet.");
        return;
      }

      alert("Pet marked as sold!");
      fetchPets();
    } catch (err) {
      console.error("Error marking as sold:", err);
    }
  };

  const sortedPets = [...pets].sort((a, b) => {
    const valA = (a[sortField] || "").toLowerCase();
    const valB = (b[sortField] || "").toLowerCase();
    return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  const filteredPets = sortedPets.filter((pet) => {
    const search = filterText.toLowerCase();
    return (
      (pet.name?.toLowerCase() || "").startsWith(search) ||
      (pet.category?.toLowerCase() || "").startsWith(search) ||
      (pet.breed?.toLowerCase() || "").startsWith(search)
    );
  });

  return (
    <>
    <Popup showQR={showQR} setShowQR={setShowQR} showAddPet={showAddPet} setShowAddPet={setShowAddPet} />
      <AdminNavbar />
      

      <div className="admin-pets-container">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading pets...</p>
          </div>
        ) : (
          <>
            <h1>Admin Pet Listings</h1>

            <div className="admin-controls">
              <input
                type="text"
                placeholder="Search by name, category, or breed"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />

              <select onChange={(e) => setSortField(e.target.value)} value={sortField}>
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
                <option value="breed">Sort by Breed</option>
              </select>

              <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <ul className="pet-list">
              {filteredPets.map((pet) => (
                <li key={pet._id} className="pet-card">
                  <div>
                    <strong>{pet.name || "N/A"}</strong> - {pet.category || "N/A"}
                    <br />
                    <span>Breed: {pet.breed || "N/A"}</span>
                    <br />
                    <span>Age: {pet.age || "?"}</span>
                  </div>
                  <button onClick={() => handleDelete(pet._id)} className="delete-btn">
                    ❌ Delete
                  </button>
                  <button className="sold-btn" onClick={() => handleMarkAsSold(pet)}>
                    ✅ Sold
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default AdminPets;
