const API_URL = "";

export const getPatients = async () => {
    const res=  await fetch(`${API_URL}/patients`);
    if(!res.ok)throw new Error("")
        return res.json();
};

export const addPatient = async (newPatient) => {
    const res=await fetch(`${API_URL}/patients`);
    const pats=await res.json();
    const id=`P${(pats.length+1).toString().padStart(3,'0')}`;
    const newdata={...newPatient,patienID:id}
    return fetch(`${API_URL}/patients`,{
        method:'POST',
        headers:{'ContentType':'application/json'},
        body:JSON.stringify(newdata)
    }).then ((res)=>res.json());
};
-----------------------------------------------------------------------------------
// Patient registration form component
const PatientRegistrationForm = ({ onRegister }) => {
    const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    condition: '',
    lastVisit: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    const errors = {};
        
    if(!formData.name){
      errors.name="Name is required"
    }
    if(!formData.age){
      errors.age="Age is required"
    }
    if(!formData.gender){
      errors.gender="Gender is required"
    }
    if(!formData.condition){
      errors.condition="Condition is required"
    }
    if(!formData.lastVisit){
      errors.lastVisit="Last Visit is required"
    }
    setErrors(errors);
    return Object.keys(errors).length===0;
 
  };

  const isValidDate = (dateString) => {
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateForm()){
        return;
    }
    if(onRegister){
        onRegister(formData);
    }
    setFormData({
        name: '',
      age: '',
      gender: '',
      condition: '',
      lastVisit: '',
    })
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={formData.name} placeholder='Name' onChange={handleChange} />
            {errors.name&&<div>{errors.name}</div>}

            <input name="age" value={formData.age} placeholder="Age" onChange={handleChange} />
             {errors.age && <div>{errors.age}</div>}

             <select name='gender' value={formData.gender} onChange={handleChange}>
                <option value="Select Gender">select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
             </select>
             {errors.gender&&<div>{errors.gender}</div>}

             <input name="condition" value={formData.condition} placeholder="Condition" onChange={handleChange} />
              {errors.condition && <div>{errors.condition}</div>}

              <input name="lastVisit" value={formData.lastVisit} placeholder="Last Visit (YYYY-MM-DD)" onChange={handleChange} />
              {errors.lastVisit && <div>{errors.lastVisit}</div>}

              <button type="submit">Register Patient</button>

        </form>
  </div>

  );
};
export default PatientRegistrationForm;
----------------------------------------------------------------------------------------------------------------------------------------


export const PatientInformation = ({ patientID }) => {
    const [patient, setPatient] = useState(null);

    useEffect(()=>{
        const fetchPatient=async()=>{
            const pats= await getPatients();
            const found=pats.find((p)=>p.patientID===patientID)
            if(found){
                setPatient(found)
            }
        }
        fetchPatient();
    },[patientID])

  
    return (
      <div className="patient-info-container">
        {patient && (
          <div>
                <p>Patient ID: {patient.patientID}</p>
                <p>Name: {patient.name}</p>
                <p>Age: {patient.age}</p>
                <p>Gender: {patient.gender}</p>
                <p>Condition: {patient.condition}</p>
                <p>Last Visit: {patient.lastVisit}</p>
          </div>
        )}
      </div>
    );
};

