import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DogDetails = ({ dogData }) => {
  const { index, ownerName, ownerLastName, ownerPhoneNumber } = useParams();
  const selectedDog = dogData[index];

  if (!selectedDog) {
    return <div>Selected dog not found.</div>;
  }

  return (
    <div className="dog-details-container">
      <div className="dog-image-container">
        <img
          src={selectedDog.img}
          alt={`Dog ${index}`}
          className="dog-image"
        />
      </div>
      <div className="dog-info-container">
        <h2>Dog Details</h2>
        <div className="details-section">
          <h3>Dog Information</h3>
          <p><strong>Name:</strong> {selectedDog.name}</p>
          <p><strong>Sex:</strong> {selectedDog.sex}</p>
          <p><strong>Breed:</strong> {selectedDog.breed}</p>
          <p><strong>Age:</strong> {selectedDog.age}</p>
          <p><strong>Chip Number:</strong> {selectedDog.chipNumber}</p>
        </div>
        <div className="details-section">
          <h3>Owner's Information</h3>
          <p><strong>Owner Name:</strong> {ownerName}</p>
          <p><strong>Owner Last Name:</strong> {ownerLastName}</p>
          <p><strong>Owner Phone Number:</strong> {ownerPhoneNumber}</p>
        </div>
        
        <Link to="/homepage">
          <button>Return to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default DogDetails;
