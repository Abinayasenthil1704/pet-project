import React, { useEffect, useState } from 'react';
import './Home.css';
import birdFood from '../assets/birdfood.jpeg';
import dogFood from '../assets/DOG.jpeg';
import catFood from '../assets/Cat.jpeg'
import freezeDogFood from '../assets/dogfood.png';
import accessories from '../assets/accessories.png';
import petDeals from '../assets/dealfood.png';
import beagle from '../assets/beagle.png';
import bestfood from '../assets/deal.png';
import { Link } from 'react-router-dom';
// import './PetFoodForm.css';

import hero3 from '../assets/hero3.png';
// import herovedio from '../assets/hero-video.mp4';
import heroVideo from '../assets/hero-vedio.mp4';
import large from '../assets/large.jpg';
function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage-container">
      
<section className="hero-section">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-text">
        <h1 className="hero-heading">Unconditional Love Awaits 🐾</h1>
        <h3 className="hero-subtext">
          🦴 Find your perfect companion today. Special adoption offers this week!
          <br />
          🦴 Bring home happiness — adopt, love, and make a lifelong friend today!
        </h3>
      </div>
    </section>
     
    <div className="pet-finder-container">
      <h2><Link to="/PetList" className="pet-link">🔍 Find Your Pet</Link></h2>
      <p className="pet-description">Looking for a furry or feathered friend? 🐾</p>
      <p className="pet-subtext">👇Click a category below to quickly browse adoptable pets.</p>
    </div>

     <div className="section-flex-container">
      
      {/* Left Side: Full-height Image */}
      <section className="quick-search">
        <img src={hero3} alt="Extension" />
      </section>

      {/* Right Side: Offer + Categories */}
      <div className="right-content">
        
        {/* Special Offer Section */}
        <section className="final-offer">
          <div className="offer-text">
            <h2>🎁 Special Bundle Offer!</h2>
            <p>Get up to <strong>25% OFF</strong> on all your pet's favorites — limited time only!</p>
            <ul className="offer-features">
              <li>🐾 Healthy Meals for Dogs & Cats</li>
              <li>🦜 Nutritious Food for Birds & Rodents</li>
              <li>🛍️ Free Shipping on orders above ₹999</li>
              <li>🍖 High-Protein Treats to Keep Pets Energetic</li>
              <li>🧼 Hygienic & Freshly Packed Products Always</li>
              <li>💧 Hydration Boosters for Hot Summer Days</li>
              <li>💳 Extra 10% OFF with Select Bank Cards</li>

            </ul>
          </div>
          <Link style={{ textDecoration: 'none', color: 'goldenrod', fontWeight: 'bold', border: '1px solid goldenrod', padding: '5px 10px', borderRadius: '5px' }} to="https://www.amazon.in/b?ie=UTF8&node=18589219031" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </section>

        {/* Shop by Categories */}
        <section className="categories">
          <h2>Shop Food By Categories</h2>
          <div className="category-list">

            {/* Bird Food */}
            <div className="category-item">
              <a href="https://www.amazon.in/Bird-Food-Birds/s?rh=n%3A4771370031" target="_blank" rel="noopener noreferrer">
                <div className="img-container">
                  <img src={birdFood} alt="Bird Food" className="imgfood" />
                  <div className="img-popup">
                    <p>Boosts feather health & digestion for pet birds.</p>
                  </div>
                </div>
              </a>
              <p style={{ fontWeight: 'bold' ,marginTop: '8px'}}>Bird Food</p>
            </div>

            {/* Dog Food */}
            <div className="category-item">
              <a href="https://www.amazon.in/s?k=dog+food" target="_blank" rel="noopener noreferrer">
                <div className="img-container">
                  <img src={dogFood} alt="Dog Food" className="imgfood" />
                  <div className="img-popup">
                    <p>Supports strong bones, healthy coat & energy levels.</p>
                  </div>
                </div>
              </a>
              <p style={{ fontWeight: 'bold' ,marginTop: '8px'}}>Dog Food</p>
            </div>

            {/* Cat Food */}
            <div className="category-item">
              <a href="https://www.amazon.in/s?k=cat+food" target="_blank" rel="noopener noreferrer">
                <div className="img-container">
                  <img src={catFood} alt="Cat Food" className="imgfood" />
                  <div className="img-popup">
                    <p>Enhances vision, urinary health & fur quality.</p>
                  </div>
                </div>
              </a>
              <p style={{ fontWeight: 'bold' ,marginTop: '8px'}}>Cat Food</p>
            </div>

          </div>
        </section>
      </div>
    </div>
      <section className="promo-section-wrapper">
  <h1 className="promo-heading">🐶 Pet Product Promotions 🛒</h1>

  <section className="promo-section">
    <div className="promo-card">
      <a href="https://www.amazon.in/s?k=freeze+dog+food" target="_blank" rel="noopener noreferrer">
        <img src={freezeDogFood} alt="Freeze Dog Food" className="promo-img" />
      </a>
      <h2>🐾 Natural Freeze Dog Foods</h2>
      <p>NATURE'S BLEND FOODS</p>
    </div>

    <div className="promo-card">
      <a href="https://www.amazon.in/s?k=dog+collars" target="_blank" rel="noopener noreferrer">
        <img src={accessories} alt="Dog Collars" className="promo-img" />
      </a>
      <h2>🐾 Stylish Dog Collars</h2>
      <p>Elastic & Adjustable Pet Bands</p>
    </div>

    <div className="promo-card">
      <a href="https://www.amazon.in/s?k=healthy+pet+food" target="_blank" rel="noopener noreferrer">
        <img src={bestfood} alt="Healthy Pet Food" className="promo-img" />
      </a>
      <h2>🐾 Healthy Pet Foods</h2>
      <p>Best Quality Nutrition for Pets</p>
    </div>

    <div className="promo-card">
      <a href="https://www.amazon.in/s?k=pet+food+discounts" target="_blank" rel="noopener noreferrer">
        <img src={petDeals} alt="Pet Food Deals" className="promo-img" />
      </a>
      <h2>🐾 Big Deals</h2>
      <p>Up to 25% Off on Pet Foods</p>
    </div>
  </section>
</section>


      {/* Pet Health Section */}
      <section className="about-health">
        <div className="health-image">
          <img src={beagle} alt="Beagle" className="beagle-img" />
        </div>
        <div className="health-content">
          <span className="badge">100% ORGANIC PET FOOD</span>
          <h2>Help Your Dog Maintain A Healthier</h2>
          <p className="description">
            Introducing Petcy's delectable range of pet food, crafted with love and care.
            With Petcy, mealtime becomes a delightful experience, fostering the bond between
            you and your pet while protecting essential nourishment.
          </p>
          <div className="features">
            <ul>
              <li>🐾 24/7 Support</li>
              <li>🐾 Pet Taxi Facility</li>
              <li>🐾 Money Back</li>
            </ul>
            <ul>
              <li>🐾 Personalized Care</li>
              <li>🐾 Quick Delivery</li>
              <li>🐾 Lowest Price</li>
            </ul>
          </div>
          {/* <Link to="/pet-food-form">
            <button className="shop-btn-small">Shop Now</button>
          </Link> */}
        </div>
      </section>

      {/* Back to Top Button */}
      {showButton && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to Top"
        >
        🦴
        </button>
      )}
    </div>
  );
}

export default Home;
