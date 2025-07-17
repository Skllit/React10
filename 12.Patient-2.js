import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    medicalHistory: '',
    currentMedications: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on typing
  };

  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.dob) {
      errors.dob = 'Date of Birth is required';
    } else {
      const enteredDate = new Date(data.dob);
      const today = new Date();
      if (enteredDate > today) {
        errors.dob = 'Date of Birth cannot be a future date';
      }
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate('/welcome'); // minimal logic, placeholder route
    }
  };

  return (
    <div className="form-container">
      <h1>Patient Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="dob">Date of Birth:</label>
        <input
          id="dob"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <p className="error">{errors.dob}</p>}

        <label htmlFor="medicalHistory">Medical History:</label>
        <textarea
          id="medicalHistory"
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={handleChange}
        />

        <label htmlFor="currentMedications">Current Medications:</label>
        <input
          id="currentMedications"
          name="currentMedications"
          value={formData.currentMedications}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;

