
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const endpoint = isLogin ? "login" : "register";

  try {
    const res = await fetch(`https://pet-server-r9z4.onrender.com/api/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      if (isLogin) {
        localStorage.setItem("user", JSON.stringify({ username: data.username }));

        if (data.username.endsWith("@admin")) {
          navigate("/admin"); // only for admins
        } else {
          navigate("/dashboard"); // regular users
        }
      } else {
        alert("✅ Registration successful! You can now log in.");
        setIsLogin(true);
        setUsername("");
        setPassword("");
      }
    } else {
      // Show specific alert when both username and password are incorrect
      if (data.message?.toLowerCase().includes("invalid") || data.message?.toLowerCase().includes("incorrect")) {
        alert("❌ Invalid username or password. Please try again.");
      } else {
        alert("❌ Login failed. Please check your credentials(Username and password).");
      }
    }

  } catch (error) {
    alert("Something went wrong. Try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? <span className="spinner"></span> : isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
