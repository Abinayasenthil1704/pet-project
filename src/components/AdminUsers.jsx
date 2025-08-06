import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import AdminNavbar from './AdminNavbar';
import './AdminUsers.css';

const AdminUsers = () => {
  const [showQR, setShowQR] = useState(false);
  const [showAddPet, setShowAddPet] = useState(false);
  const [users, setUsers] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    fetch("https://pet-server-r9z4.onrender.com/api/admin/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`https://pet-server-r9z4.onrender.com/api/admin/users/${userId}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (res.ok) {
        alert(result.message || "User deleted.");
        fetchUsers();
      } else {
        alert(result.message || "Failed to delete user.");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const filteredUsers = users.filter(user => {
    const search = filterText.toLowerCase();
    return (
      user.username?.toLowerCase().includes(search) ||
      user.email?.toLowerCase().includes(search)
    );
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortField) return 0;
    const valA = (a[sortField] || "").toLowerCase();
    const valB = (b[sortField] || "").toLowerCase();
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="admin-users-container">
      <Popup showQR={showQR} setShowQR={setShowQR} showAddPet={showAddPet} setShowAddPet={setShowAddPet} />
      <AdminNavbar />

      <h1 className="admin-heading">Admin User Management</h1>

      <div className="sort-filter-controls">
        <input
          type="text"
          placeholder="Search by username or email..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <section className="user-list-section">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading users...</p>
          </div>
        ) : (
          <table className="user-table">
            <thead>
              <tr>
                <th onClick={() => toggleSort("username")}>
                  Username {sortField === "username" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th onClick={() => toggleSort("email")}>
                  {sortField === "email" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map(user => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default AdminUsers;
