import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PetList from "./pages/PetList";
import CareTips from "./pages/CareTips";
import AdminPanel from "./pages/AdminPanel";
import AdminUsers from "./components/AdminUsers";
import AdminPets from "./components/AdminPet";
import AdminSoldPets from "./components/AdminSoldPets";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<AuthForm />} />

      {/* Private Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/PetList"
        element={
          <PrivateRoute>
            <PetList />
          </PrivateRoute>
        }
      />
      <Route
        path="/care-tips"
        element={
          <PrivateRoute>
            <CareTips />
          </PrivateRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <PrivateRoute adminOnly={true}>
            <AdminPanel />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <PrivateRoute adminOnly={true}>
            <AdminUsers />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/pets"
        element={
          <PrivateRoute adminOnly={true}>
            <AdminPets />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/soldpets"
        element={
          <PrivateRoute adminOnly={true}>
            <AdminSoldPets />
          </PrivateRoute>
        }
      />

      {/* Fallback route for AdminPanel (optional duplicate path) */}
      <Route
        path="/AdminPanel"
        element={
          <PrivateRoute adminOnly={true}>
            <AdminPanel />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
