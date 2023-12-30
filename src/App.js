import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countryName, setCountryName] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);
  const [randomCountries, setRandomCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch 20 random countries when the component mounts
    async function fetchRandomCountries() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        const randomCountriesData = data
          .sort(() => Math.random() - 0.5)
          .slice(0, 20)
          .map((country) => ({
            name: country.name.common,
            flag: country.flags.png,
            details: country,
          }));

        setRandomCountries(randomCountriesData);
      } catch (error) {
        console.error('Error fetching random countries:', error);
      }
    }

    fetchRandomCountries();
  }, []);

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
        setErrorMessage('');
      } else {
        setCountryInfo(null);
        setErrorMessage('Please enter a valid country name.');
      }
    } catch (error) {
      console.error('Error fetching country data:', error);
      setCountryInfo(null);
      setErrorMessage('An error occurred while fetching country data. Please try again.');
    }
  };

  const handleRandomCountryClick = (details) => {
    setCountryInfo({
      name: details.name.common,
      flag: details.flags.png,
      capital: details.capital,
      population: details.population.toLocaleString(),
      languages: details.languages ? Object.values(details.languages).join(', ') : 'N/A',
    });
    setErrorMessage('');
  };

  return (
    <div className="container">
      <h1>Country Information App</h1>
      <div className="search-section">
        <input
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          placeholder="Enter country name"
        />
        <button onClick={searchCountry}>Search</button>
      </div>
      <div id="displayArea">
        {errorMessage && !countryInfo ? (
          <p>{errorMessage}</p>
        ) : countryInfo ? (
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
          <div className="random-countries">
            {randomCountries.map((randomCountry) => (
              <div
                key={randomCountry.name}
                className="random-country"
                onClick={() => handleRandomCountryClick(randomCountry.details)}
              >
                <img src={randomCountry.flag} alt={`${randomCountry.name} flag`} width="50" />
                <p>{randomCountry.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;



































// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [countryName, setCountryName] = useState('');
//   const [countryInfo, setCountryInfo] = useState(null);
//   const [randomCountries, setRandomCountries] = useState([]);

//   useEffect(() => {
//     // Fetch 20 random countries when the component mounts
//     async function fetchRandomCountries() {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const data = await response.json();

//         const randomCountriesData = data
//           .sort(() => Math.random() - 0.5) // Shuffle the array to get random countries
//           .slice(0, 20)
//           .map((country) => ({
//             name: country.name.common,
//             flag: country.flags.png,
//             details: country,
//           }));

//         setRandomCountries(randomCountriesData);
//       } catch (error) {
//         console.error('Error fetching random countries:', error);
//       }
//     }

//     fetchRandomCountries();
//   }, []); // Empty dependency array to fetch only once

//   const searchCountry = async () => {
//     try {
//       const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//       const data = await response.json();

//       if (data.length > 0) {
//         const { name, flags, capital, population, languages } = data[0];
//         setCountryInfo({
//           name: name.common,
//           flag: flags.png,
//           capital: capital,
//           population: population.toLocaleString(),
//           languages: languages ? Object.values(languages).join(', ') : 'N/A',
//         });
//       } else {
//         setCountryInfo(null);
//       }
//     } catch (error) {
//       console.error('Error fetching country data:', error);
//       setCountryInfo(null);
//     }
//   };

//   const handleRandomCountryClick = (details) => {
//     setCountryInfo({
//       name: details.name.common,
//       flag: details.flags.png,
//       capital: details.capital,
//       population: details.population.toLocaleString(),
//       languages: details.languages ? Object.values(details.languages).join(', ') : 'N/A',
//     });
//   };

//   return (
//     <div className="container">
//       <h1>Country Information App</h1>
//       <div className="search-section">
//         <input
//           type="text"
//           value={countryName}
//           onChange={(e) => setCountryName(e.target.value)}
//           placeholder="Enter country name"
//         />
//         <button onClick={searchCountry}>Search</button>
//       </div>
//       <div id="displayArea">
//         {countryInfo ? (
//           <div>
//             <h2>{countryInfo.name}</h2>
//             <img src={countryInfo.flag} alt={`${countryInfo.name} flag`} width="100" />
//             <table>
//               <tbody>
//                 <tr>
//                   <td>Capital:</td>
//                   <td>{countryInfo.capital}</td>
//                 </tr>
//                 <tr>
//                   <td>Population:</td>
//                   <td>{countryInfo.population}</td>
//                 </tr>
//                 <tr>
//                   <td>Languages:</td>
//                   <td>{countryInfo.languages}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div className="random-countries">
//             {randomCountries.map((randomCountry) => (
//               <div
//                 key={randomCountry.name}
//                 className="random-country"
//                 onClick={() => handleRandomCountryClick(randomCountry.details)}
//               >
//                 <img src={randomCountry.flag} alt={`${randomCountry.name} flag`} width="50" />
//                 <p>{randomCountry.name}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;



































// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [countryName, setCountryName] = useState('');
//   const [countryInfo, setCountryInfo] = useState(null);

//   const searchCountry = async () => {
//     try {
//       const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//       const data = await response.json();

//       if (data.length > 0) {
//         const { name, flags, capital, population, languages } = data[0];
//         setCountryInfo({
//           name: name.common,
//           flag: flags.png,
//           capital: capital,
//           population: population.toLocaleString(),
//           languages: languages ? Object.values(languages).join(', ') : 'N/A',
//         });
//       } else {
//         setCountryInfo(null);
//       }
//     } catch (error) {
//       console.error('Error fetching country data:', error);
//       setCountryInfo(null);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Country Information App</h1>
//       <div>
//         <input
//           type="text"
//           value={countryName}
//           onChange={(e) => setCountryName(e.target.value)}
//           placeholder="Enter country name"
//         />
//         <button onClick={searchCountry}>Search</button>
//       </div>
//       <div id="displayArea">
//         {countryInfo ? (
//           <div>
//             <h2>{countryInfo.name}</h2>
//             <img src={countryInfo.flag} alt={`${countryInfo.name} flag`} width="100" />
//             <table>
//               <tbody>
//                 <tr>
//                   <td>Capital:</td>
//                   <td>{countryInfo.capital}</td>
//                 </tr>
//                 <tr>
//                   <td>Population:</td>
//                   <td>{countryInfo.population}</td>
//                 </tr>
//                 <tr>
//                   <td>Languages:</td>
//                   <td>{countryInfo.languages}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
        // ) : (
        //   <p>Please enter a valid country name.</p>
        // )}
//       </div>
//     </div>
//   );
// }

// export default App;











