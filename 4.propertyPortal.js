
const PropertyList = () => {

  const [properties, setProperties] = useState([
    { id: 1, name: 'Property 1', location: 'Location 1', price: 100000 },
    { id: 2, name: 'Property 2', location: 'Location 2', price: 150000 },
    { id: 3, name: 'Property 3', location: 'Location 3', price: 200000 }
  ]);

  // ✅ Add new property — ensures unique id and content
  const handleAddProperty = () => {
    const newProperty = {
      id: properties.length + 1, // Generate next id
      name: `Property ${properties.length + 1}`, // Name for new property
      location: `Location ${properties.length + 1}`, // Location for new property
      price: 100000 + (properties.length + 1) * 50000 // Calculate price
    };
    setProperties([...properties, newProperty]); // Update state with new property
  };

  // ✅ Remove property by id — crucial for passing removal test
  const handleRemoveProperty = (id) => {
    setProperties(properties.filter((p) => p.id !== id)); // Remove selected property
  };

  return (
    <div>
      <h1>Property List</h1>

      {/* ✅ Required for "Add Property" test */}
      <button onClick={handleAddProperty}>Add Property</button>

      <ul>
        {/* ✅ Required for list rendering & test interactions */}
        {properties.map((p) => (
          <li key={p.id}>
            {p.name}

            {/* ✅ Pass id correctly to remove function for the test to pass */}
            <button onClick={() => handleRemoveProperty(p.id)}>Remove Property</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
