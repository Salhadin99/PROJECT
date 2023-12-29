import React, { useState } from 'react';
import './App.css';

function App() {
  const [countryName, setCountryName] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);

  const searchCountry = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();

      if (data.length > 0) {
        const { name, flags, capital, population, languages } = data[0];
        setCountryInfo({
          name: name.common,
          flag: flags.png,
          capital: capital,
          population: population.toLocaleString(),
          languages: languages ? Object.values(languages).join(', ') : 'N/A',
        });
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
            <h2>{countryInfo.name}</h2>
            <img src={countryInfo.flag} alt={`${countryInfo.name} flag`} width="100" />
            <table>
              <tbody>
                <tr>
                  <td>Capital:</td>
                  <td>{countryInfo.capital}</td>
                </tr>
                <tr>
                  <td>Population:</td>
                  <td>{countryInfo.population}</td>
                </tr>
                <tr>
                  <td>Languages:</td>
                  <td>{countryInfo.languages}</td>
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

