
 
const WeatherComponent = () => {
  const [temperature, setTemperature] = useState(25); // Default temperature in Celsius
  const [format, setFormat] = useState('Celsius');
 
 
//   call TempratureFunction
const converted=(temperatureFunction(temperature,format));
 
  return (
    <div className="weather-container">
      <h2>Weather</h2>
      {/* display converted temprature  */}
      <p>Temperature: {converted}</p>
      
     {/* provode temprature field and format drop down and call the respocted function on the change of drop down */}
     <input value={temperature} onChange={(e)=>setTemperature(e.target.value)} name='temperature' placeholder='Enter new temperature'/>
     <select onChange={(e)=>setFormat(e.target.value)} name='format' value={format}>
        <option value='Celsius'>Celsius</option>
        <option value='Fahrenheit'>Fahrenheit</option>
        <option value='Kelvin'>Kelvin</option>
     </select>
    </div>
  );
};
 
export default WeatherComponent;
------------------------------------------------------------------------------------------------------------------------
// temperatureFunction.js
export const temperatureFunction = (temperature, format) => {
  // check temprature formate write convertion formula to convert.
  // return temprature to use it in weather component
    let value=parseFloat(temperature);
  if(format==='Celsius'){
     return `${value}°C`;
  }
  else if(format==='Fahrenheit'){
     value= ((value*(9/5)+32).toFixed(2);
     return `${value}°F`
  }
  else{
    value=value+273.15;
    return `${value.toFixed(2)}K`
  }
  
};

















