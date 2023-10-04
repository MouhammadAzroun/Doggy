import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ dogData }) => {
  const { index, ownerName, ownerLastName, ownerPhoneNumber } = useParams();
  const selectedDog = dogData[index];

  if (!selectedDog) {
    return <div>Selected dog not found.</div>;
  }

  return (
    <div>
      <h2>Dog Details</h2>
      <img
        src={selectedDog.img}
        alt={`Dog ${index}`}
        className="dog-image"
      />
      <p>Name: {selectedDog.name}</p>
      <p>Sex: {selectedDog.sex}</p>
      <p>Breed: {selectedDog.breed}</p>
      <p>Age: {selectedDog.age}</p>
      <p>Chip Number: {selectedDog.chipNumber}</p>
      <h3>Owner's Information</h3>
      <p>Owner Name: {ownerName}</p>
      <p>Owner Last Name: {ownerLastName}</p>
      <p>Owner Phone Number: {ownerPhoneNumber}</p>
    </div>
  );
};

export default DogDetails;
