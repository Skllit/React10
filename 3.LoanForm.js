
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
      validationErrors.fullName="";

    const amt=parseFloat(formData.loanAmount);
    if(isNaN(amt)||amt<1000||amt>100000)
      validationErrors.loanAmount="";

    const tenure=parseInt(formData.tenure)
    if(isNaN(tenure)||tenure<1||tenure>30)
      validationErrors.tenure=""
      
    setErrors(validationErrors)

    if(Object.keys(validationErrors).length===0){
      navigate("/src/WelcomePage.js")
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
      <input name="fullName" value={formData.fullName} onChange={handleChange}></input>
      {errors.fullName&&<p className="error">{errors.fullName}</p>}

       <input name="loanAmount" value={formData.loanAmount} onChange={handleChange}/>
          {errors.loanAmount && <p className="error">{errors.loanAmount}</p>}
       
       <select name="purpose" value={formData.purpose} onChange={handleChange} >
        <option value="House">House</option>
            <option value="Car">Car</option>
            <option value="Personal">Personal</option>
            <option value="Education">Education</option>
       </select>

       <input name="tenure" value={formData.tenure} onChange={handleChange}></input>
       {errors.tenure&&<p className="error">{errors.tenure}</p>}

       <button type="submit">Submit</button>

    </form>

    </div>
  );
};

export default LoanForm;
