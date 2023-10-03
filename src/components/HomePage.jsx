import { useEffect, useState } from "react"; 
import './HomePage.css'; // Import the CSS file

const apiUrl = 'https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683'



const HomePage = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch(apiUrl)
        .then((response) => response.json())
      .then((result) => {
        // Extract the 'record' array from the response
        const records = result.record;
        setData(records);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      {/* Render the images as a grid */}
      <div className="image-grid">
        {data.map((item, index) => (
          <img key={index} src={item.img} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;