

import React, { useEffect, useState } from "react";
import "./AllPets.css";

const API =
  import.meta.env.VITE_API_BASE ||
  "https://pet-server-r9z4.onrender.com/api/pets/all-pets";

function AllPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userContact, setUserContact] = useState("");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("Failed to fetch pets");
        const data = await res.json();
        setPets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sansaisansai2003@gmail.com?subject=Adoption Interest - ${selectedPet.name}&body=Hi, I am ${userName} and I'm interested in adopting ${selectedPet.name}. You can contact me at ${userEmail}, ${userContact}.`;
    window.location.href = mailtoLink;
    setShowForm(false);
    setUserName("");
    setUserEmail("");
    setUserContact("");
  };

  const handleWhatsApp = () => {
    const message = `🐾 *Adoption Request*\n\n*Pet Name:* ${selectedPet.name}\n*Breed:* ${selectedPet.breed}\n*Age:* ${selectedPet.age} years\n\n*User Details:*\nName: ${userName}\nEmail: ${userEmail}\nContact: ${userContact}\n\nI am interested in adopting this pet.`;
    const whatsappLink = `https://wa.me/919786009429?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  if (loading) return <div className="loading">Loading pets...</div>;
  if (error) return <div className="error">{error} </div>;

  return (
    <div className="pets-container">
      <h2 className="pets-title">All Pets for Adoption</h2>
      <div className="pets-grid">
        {pets.map((pet, index) => (
          <div
            className="pet-card"
            key={pet._id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={pet.image} alt={pet.name} className="pet-img" />
            <h3 className="pet-name">{pet.name}</h3>
            <p>
              <b>Breed:</b> {pet.breed}
            </p>
            <p>
              <b>Age:</b> {pet.age} years
            </p>
            <button className="adopt-btn" onClick={() => handleAdoptClick(pet)}>
              Adopt Me
            </button>
          </div>
        ))}
      </div>

      {showForm && selectedPet && (
        <div className="adoption-form-overlay">
          <div className="adoption-form">
            <h2>Adopt {selectedPet.name}</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Your Contact Number"
                value={userContact}
                onChange={(e) => setUserContact(e.target.value)}
                required
              />
              <div className="btn-group">
                <button type="submit"> Send Mail</button>
                <button type="button" onClick={handleWhatsApp}>
                   WhatsApp
                </button>
                <button type="button" onClick={() => setShowForm(false)}>
                   Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllPets;
