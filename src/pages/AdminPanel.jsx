
import React, { useEffect, useState } from "react";
import Popup from '../components/Popup';
import AdminNavbar from "../components/AdminNavbar";  
import AdminStats from "../components/AdminStats";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);
   const [showQR, setShowQR] = useState(false);
    const [showAddPet, setShowAddPet] = useState(false);

  useEffect(() => {
    fetch("https://pet-server-r9z4.onrender.com/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));

    fetch("https://pet-server-r9z4.onrender.com/api/admin/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Error fetching pets:", err));
  });

  return (
    <div style={{ padding: "2rem" }}>
    <Popup
        showQR={showQR}
        setShowQR={setShowQR}
        showAddPet={showAddPet}
        setShowAddPet={setShowAddPet}
      />
      <AdminNavbar />
      
      {/* <h2>Admin Panel</h2> */}
      <AdminStats />

    </div>
  );
};

export default AdminPanel;
