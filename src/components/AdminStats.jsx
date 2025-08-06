import React, { useEffect, useState } from "react";
import "./AdminStats.css";

const AdminStats = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://pet-server-r9z4.onrender.com/api/admin/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setError("Failed to load stats"));
  }, []);

  if (!stats)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading stats...</p>
      </div>
    );
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">📊 Admin Dashboard</h1>

      {/* Overview Stats */}
      <div className="stat-grid">
        <StatCard label="Total Users" value={stats.totalUsers} />
        <StatCard label="Users Joined Today" value={stats.todayUsers} />
        <StatCard label="Total Pets" value={stats.totalPets} />
        <StatCard label="Pets Added Today" value={stats.todayPets} />
        <StatCard label="Total Sold" value={stats.totalSoldPets} />
        <StatCard label="Sold Today" value={stats.todaySoldPets} />
      </div>
      {/* Top Breeds */}
      <div className="section">
        <h2 className="section-title">🔥 Top Breeds Sold</h2>
        <ul className="breed-list">
          <li>Golden Retriever - 8 sold</li>
          <li>Persian Cat - 5 sold</li>
          <li>Parrot - 3 sold</li>
        </ul>
      </div>

      {/* Recent Activity */}
      <div className="section">
        <h2 className="section-title">📅 Recent Activity</h2>
        <ul className="activity-list">
          <li>[Aug 5] Added Pet: German Shepherd</li>
          <li>[Aug 4] Deleted User: john123</li>
          <li>[Aug 3] Sold Pet: Persian Cat</li>
        </ul>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }) => (
  <div className="stat-card">
    <p className="stat-label">{label}</p>
    <h2 className="stat-value">{value}</h2>
  </div>
);

const CategoryCard = ({ name, count }) => (
  <div className="category-card">
    <p className="category-name">{name}</p>
    <p className="category-count">{count}</p>
  </div>
);

export default AdminStats;
