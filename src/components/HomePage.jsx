import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ dogData }) => {
  return (
    <div>
      <h2>Home Page</h2>
      <div className="image-grid">
        {dogData.map((dog, index) => (
          <Link
            key={index}
            to={`/dogdetails/${index}/${dog.owner.name}/${dog.owner.lastName}/${dog.owner.phoneNumber}`}
          >
            <img
              src={dog.img}
              alt={`Dog ${index}`}
              className="dog-image"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
