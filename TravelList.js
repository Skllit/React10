import { useState, useEffect } from "react";

export default function WishList({ initialLocations }) {
  const [locations, setLocations] = useState(initialLocations);
  const [input, setInput] = useState("");

  
    console.log("Previous Wish List:", locations);
    //console.log("Current Wish List:", input);
  

  const handleAdd = (e) => {
    // e.preventDefault();

    if (input && !locations.includes(input)) {
      setLocations([...locations, input]);
      setInput("");
    }
  };

  const handleRemove = (i) =>
    setLocations(locations.filter((_, index) => index !== i));

  return (
    <div>
      
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new location"
        />
        <button  onClick={handleAdd} type="submit">Add</button>
 
      <ul>
        {locations.map((loc, i) => (
          <li key={i}>
            {loc}
            <button onClick={() => handleRemove(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
