import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
const LoanForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    loanAmount: "",
    purpose: "House",
    tenure: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if(!formData.fullName.trim())
      validationErrors.fullName="Please enter your full name"

    const amt=parseFloat(formData.loanAmount)
    if(isNaN(amt)||amt<1000 ||amt>1000000)
      validationErrors.loanAmount="loan amount must be between 1000 and 1000000"

    const tenure=parseInt(formData.tenure)
    if(isNaN(tenure)||tenure<1 ||tenure>30)
      validationErrors.tenure="Tenure must be between 1 and 30 years"

    setErrors(validationErrors)
    if(Object.keys(validationErrors).length===0){
      navigate( "/src/WelcomePage.js")
    }else{
      navigate("/src/ErrorPage.js")
    }
    // Validations rules: if valid than navigate to welcome page otherwies 
    // navigate to error page
    
  };

  return (
    <div>
    <h1 className="header">Bank Loan Form</h1>
    <form onSubmit={handleSubmit}>

      <label htmlFor="fullName">Full Name</label>
     <input  id="fullName" placeholder="fullName" value={formData.fullName} name="fullName" onChange={handleChange}></input>
     {errors.fullName&&<p className="error">{errors.fullName}</p>}
      
      <label htmlFor="loanamount">loan amount</label>
     <input id="loanamount" placeholder="loanAmount" value={formData.loanAmount} name="loanAmount" onChange={handleChange}></input>
       {errors.loanAmount&&<p className="error">{errors.loanAmount}</p>}
      
      <select value={formData.purpose} onChange={handleChange} name="purpose">
        <option value="Car">Car</option>
            <option value="Personal">Personal</option>
            <option value="Education">Education</option>
      </select>
      {errors.purpose&&<p className="error">{errors.purpose}</p>}

     <label htmlFor="tenure">tenure</label>
     <input id="tenure" placeholder="tenure" value={formData.tenure} name="tenure" onChange={handleChange}></input>
     {errors.tenure&&<p className="error">{errors.tenure}</p>}
     <button type="submit">submit</button>

    </form>

    {/* Create Loan Form HTML */}
    </div>
  );
};

export default LoanForm;
