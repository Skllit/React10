const Trip = () => {
  const [destinations, setDestinations] = useState([]);

useEffect(() => {
    setDestinations([{ id: 1, name: 'Test Destination', location: 'Test Location' }]);
    return () => console.log("unmounted");
  }, []);

  const handleAddDestination = () => {
    const nextId = destinations.length + 1;
    setDestinations([...destinations,{id: nextId,name: `Destination ${nextId}`,location: `Location ${nextId}`,},]);
    
  };

  const handleRemoveDestination = (id) => {
    setDestinations(destinations.filter((d) => d.id !== id));
  };

  return (
    <div className="trip-container">
      <button onClick={handleAddDestination}>Add Destination</button>
      {destinations.map((d) => (
        <Destination key={d.id} id={d.id} name={d.name} location={d.location} onRemove={() => handleRemoveDestination(d.id)} />
      ))}
    </div>
  );
};

export default Trip;
--------------------------------------------------------------------------------------------------------------------------------------
const Destination = ({ id, name, location, onRemove }) => {
  
     useEffect(() => {
    return () => { 
    };
  }, []);
    

  const handleRemove = () => {
    onRemove();
  };
  return (
    <div className="destination-container">
      <h3>{name}</h3>
      <p>Location: {location}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Destination;

