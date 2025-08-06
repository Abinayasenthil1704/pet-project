import React from 'react';
import Navbar from './Navbar';
import AddPetForm from './AddPetForm'; // ✅ Import this
import qrImage from '../assets/qr.jpg'; // ✅ Import this

function Popup({ showQR, setShowQR, showAddPet, setShowAddPet }) {
  return (
    <div>
      <Navbar setShowQR={setShowQR} setShowAddPet={setShowAddPet} />

      {/* QR Popup */}
      {showQR && (
        <div className="qr-popup-overlay">
          <div className="qr-popup">
            <img src={qrImage} alt="QR Code" className="qr-image" />
            <button className="close-btn" onClick={() => setShowQR(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add Pet Form */}
      {showAddPet && <AddPetForm onClose={() => setShowAddPet(false)} />}
    </div>
  );
}

export default Popup;
