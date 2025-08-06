
import React, { useState } from 'react';
import './AddPetForm.css';

function AddPetForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] }); // for file upload
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('type', formData.type);
    data.append('breed', formData.breed);
    data.append('age', formData.age);
    data.append('image', formData.image); // actual file

    try {
      const res = await fetch('https://pet-server-r9z4.onrender.com/api/pets/add-pet', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();
      if (res.ok) {
        alert('Pet added successfully!');
        onClose();
      } else {
        alert(result.error || 'Failed to add pet.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error.');
    }
  };

  return (
    <div className="popup-form">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3>Add New Pet</h3>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="type" placeholder="Type (dog/cat/bird)" onChange={handleChange} required />
        <input name="breed" placeholder="Breed" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
        <input name="image" type="file" accept="image/*" onChange={handleChange} required />
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default AddPetForm;
