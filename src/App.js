import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [countryName, setCountryName] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);

  const searchCountry = async () => {
    // Fetch country data from the REST Countries API
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();

      // Update state with country information
      if (data.length > 0) {
        setCountryInfo(data[0]);
      } else {
        setCountryInfo(null);
      }
    } catch (error) {
      console.error('Error fetching country data:', error);
      setCountryInfo(null);
    }
  };
  

  return (
    <div className="container">
      <h1>Country Information App</h1>
      <div>
        <input
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          placeholder="Enter country name"
        />
        <button onClick={searchCountry}>Search</button>
      </div>
      <div id="displayArea">
        {countryInfo ? (
          <div>
            <h2>{countryInfo.name.common}</h2>
            <img src={countryInfo.flags.png} alt={`${countryInfo.name.common} flag`} width="100" />
            <table>
              <tbody>
                <tr>
                  <td>Capital:</td>
                  <td>{countryInfo.capital}</td>
                </tr>
                <tr>
                  <td>Population:</td>
                  <td>{countryInfo.population.toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Languages:</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p>Please enter a valid country name.</p>
        )}
      </div>
    </div>
  );
}

export default App;








