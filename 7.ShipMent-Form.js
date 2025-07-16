// ShipmentForm.js
import React, { useState } from "react";
import { addShipment, getAllShipments } from "./ShipmentService";
import './App.css';
function ShipmentForm() {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    origin: "",
    destination: "",
    status: "",
    expectedDelivery: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  };

  const validateForm = () => {
    const newErrors = {}; 
    if (!formData.sender.trim()) {
      newErrors.sender = "Sender is required"
    }
    if (!formData.receiver.trim()) {
      newErrors.receiver = "Receiver is required"
    }
    if (!formData.origin.trim()) {
      newErrors.origin = "Origin is required"
    }
    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required"
    }
    if (!formData.status.trim()) {
      newErrors.status = "Status is required"
    }
    if (!formData.expectedDelivery.trim()) {
      newErrors.expectedDelivery = "Expected Delivery is required"
    }
    //return newErrors;
    setErrors(newErrors);
    return Object.keys(newErrors).length===0
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateForm()){
      return;
    }
     console.log("success")
      setErrors({});
    
  };

  return (
    <div className="shipment-form-container">
      <h2>Register New Shipment</h2>
      {/* crete shipment form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="sender">Sender:</label>
        <input id="sender" type="text" name="sender" value={formData.sender} onChange={handleChange}></input>
        {errors.sender && <p>{errors.sender}</p>}

        <label htmlFor="receiver">Receiver:</label>
        <input id="receiver" type="text" name="receiver" value={formData.receiver} onChange={handleChange}></input>
        {errors.receiver && <p>{errors.receiver}</p>}

        <label htmlFor="origin">Origin:</label>
        <input id="origin" type="text" name="origin" value={formData.origin} onChange={handleChange}></input>
        {errors.origin && <p>{errors.origin}</p>}

        <label htmlFor="destination">Destination:</label>
        <input id="destination" type="text" name="destination" value={formData.destination} onChange={handleChange}></input>
        {errors.destination && <p>{errors.destination}</p>}

        <label htmlFor="status">Status:</label>
        <input id="status" type="text" name="status" value={formData.status} onChange={handleChange}></input>
        {errors.status && <p>{errors.status}</p>}
        
        <label htmlFor="expectedDelivery">Expected Delivery:</label>
        <input id="expectedDelivery" type="text" name="expectedDelivery" value={formData.expectedDelivery} onChange={handleChange}></input>
        {errors.expectedDelivery && <p>{errors.expectedDelivery}</p>}

        <button type="submit">Register Shipment</button>
      </form>

    </div>
  );
}

export default ShipmentForm;
