import React from 'react';
import './PetServices.css';
import grooming from '../assets/grooming.jpeg';
import boarding from '../assets/boarding.jpeg';
import walking from '../assets/walking.jpeg';
import vet from '../assets/vet.jpeg';
import training from '../assets/training.jpeg';
import mating from '../assets/mating.jpg';

const services = [
  {
    icon: grooming,
    title: 'Pet Grooming',
    desc: 'Schedule Professional In-Home Grooming Services for Your Cat or Dog',
   
  },
  {
    icon: boarding,
    title: 'Pet Boarding',
    desc: 'Book Trusted Boarding Service for Your Cat or Dog',
 
  },
  {
    icon: walking,
    title: 'Dog Walking',
    desc: 'Reserve Personalized Dog Walking Service Near You',
    
  },
  {
    icon: vet,
    title: 'Online Vet Consultation',
    desc: 'Professional Veterinary Service at Your Home or Online',
    
  },
  {
    icon: training,
    title: 'Dog Training',
    desc: 'Schedule Professional Dog Training Service at Your Home',
    
  },
  {
    icon: mating,
    title: 'Pet Mating',
    desc: 'Find the Perfect Match for Your Pet with Tailored Mating Profiles',
    
  },
];

function PetServices() {
  return (
    <div className="services-container">
      <h2>Book Pet Care Service With PetAdopt 🐾</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div
              className="service-image"
              style={{ backgroundImage: `url(${service.icon})` }}
            >
              <div className="service-overlay">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className="service-link">{service.linkText}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetServices;
