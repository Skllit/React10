import React, { useEffect, useState } from "react";
import { ProfessorServices } from "../services/api";
import ProfessorDetails from "./ProfessorDetails";
import "../App.css";
 
function AddProfessorForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [professors, setProfessors] = useState([]);
 
 
  const fetchProfessors = async () => {
    // fetch profeesors from json server
  };
 
//   use react hook to load professors
 
  const validateForm = () => {
    // form validation
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    ProfessorServices.addProfessor({
        name: "John Doe",
        email: "john@example.com",
    })
    // validate form and post data to json server
  };
 
  return (
    <div className="container">
 
      <form onSubmit={handleSubmit}>
      <label for="name">Name</label>
      <input id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
       <label for="email">Email</label>
       <input id="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <button type="submit">Add Professor</button>  
     </form>
     
 
   
   
    </div>
  );
}
 
export default AddProfessorForm;
