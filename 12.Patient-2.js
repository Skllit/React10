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
    setErrors({ ...errors, [name]: '' }); // Clear the error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     if(!validate(formData)){
      return;
     }
     navigate('/src/WelcomePage.js')
  };

  const validate = (data) => {
    const errors = {};
    if(!formData.name.trim())
      errors.name="Name is required";
    
    if(!formData.dob){
      errors.dob="Date of Birth is required";
    }else{
      const db=new Date(data.dob);
      const today=new Date()
      if(db>today){
        errors.dob="Date of Birth cannot be a future date"
      }
    }
    
    setErrors(errors)
    return Object.keys(errors).length===0;
  };

  return (
    <div className="form-container">
      <h1>Patient Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' name='name' value={formData.name} onChange={handleChange}></input>
        {errors.name&&<p className='error'>{errors.name}</p>}

        <label htmlFor='dob'>Date of Birth:</label>
        <input id='dob' name='dob' value={formData.dob} onChange={handleChange}></input>
        {errors.dob&&<p className='error'>{errors.dob}</p>}

        <label htmlFor='medicalHistory'>Medical History:</label>
        <textarea  id='medicalHistory' name='medicalHistory' value={formData.medicalHistory} onChange={handleChange}></textarea>
        {errors.medicalHistory&&<p className='error'>{errors.medicalHistory}</p>}

         <label htmlFor="currentMedications">Current Medications:</label>
        <input id="currentMedications" name="currentMedications" value={formData.currentMedications} onChange={handleChange}/>
         <button type="submit">Submit</button>

        



      </form>
     {/* Create Patient Form */}
    </div>
  );
};

export default PatientForm;
