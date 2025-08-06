import React from 'react';
import './CareTips.css';
import { Link } from 'react-router-dom';
import PetServices from '../components/PetServices';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Popup from '../components/Popup';
import Footer from '../components/Footer';
// import AddPetForm from '../components/AddPetForm';
// import qrImage from '../assets/qr.jpg';

const tips = [
  {
    title: 'Daily Nutrition',
    description: 'Feed your pets high-quality, balanced meals suited to their breed, age, and size.',
    
  },
  {
    title: 'Fresh Water',
    description: 'Always keep a clean, fresh bowl of water accessible to avoid dehydration.',
    
  },
  {
    title: 'Regular Vet Visits',
    description: 'Schedule periodic health checkups and vaccinations to keep your pet healthy.',
    
  },
  {
    title: 'Exercise & Play',
    description: 'Engage your pet with daily walks, games, or interactive toys to promote physical health.',
    
  },
  {
    title: 'Grooming',
    description: 'Brush fur regularly, clean ears, and clip nails to avoid discomfort or infection.',
    
  },
  {
    title: 'Safe Environment',
    description: 'Keep hazardous items like wires, chemicals, and sharp tools out of your pet’s reach.',
    
  },
];

function CareTips() {
  const [showQR, setShowQR] = useState(false);
  const [showAddPet, setShowAddPet] = useState(false);
    
  
  return (
    <>
      <Popup
        showQR={showQR}
        setShowQR={setShowQR}
        showAddPet={showAddPet}
        setShowAddPet={setShowAddPet}
      />
    <div className="care-tips-container">
      <h2 className="care-title">Pet Care Tips 🐾</h2>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
            {/* <Link to={tip.link} className="see-more-link">➡ See More</Link> */}
          </div>
        ))}
      </div>
      <br />
      <hr />
      <PetServices />
      
    </div>
    <Footer/>
    </>

  );
}

export default CareTips;
