';

const API_URL = `${environment.apiUrl}/properties`;

const PropertyService = {
  getAllProperties: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch properties");
    return response.json();
  },

  getPropertyByID: async (propertyID) => {
    const response = await fetch(`${API_URL}?_id=${propertyID}`);
    if (!response.ok) throw new Error("Failed to fetch property details");
    return response.json(); // assuming API returns array with single object
  },

  addProperty: async (newProperty) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProperty),
    });
    if (!response.ok) throw new Error("Failed to add property");
    return response.json();
  },
};

export default PropertyService;
---------------------------------------------------------------------------------------------------
const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await PropertyService.getAllProperties();
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error: ${error}`}</p>;

  return (
    <div className="property-list-container">
      <h2 className="property-list-header">Properties List</h2>
      <ul className="property-list">
        {properties.map((property) => (
          <li key={property._id}>
            <Link to={`/properties/${property._id}`}>
              {property.location} - {property.type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
----------------------------------------------------------------------------------------
  import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyService from './PropertyService';
import './App.css';

const PropertyDetail = () => {
  const { propertyID } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await PropertyService.getPropertyByID(propertyID);
        setProperty(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [propertyID]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{`Error: ${error}`}</p>;

  if (!property) return <p>No property found.</p>;

  return (
    <div className="property-detail-container">
      <h2>Property Details</h2>
      <p>{`Type: ${property.type}`}</p>
      <p>{`Location: ${property.location}`}</p>
      <p>{`Price: ${property.price}`}</p>
      <p>{`Rooms: ${property.rooms}`}</p>
      <p>{`Size: ${property.size}`}</p>
    </div>
  );
};

export default PropertyDetail;

















  
