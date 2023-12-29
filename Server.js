// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.static('public'));

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });





// const express = require('express');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 5000;

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'build')));

// // Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });





// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const port = 5000;

// app.use(cors());

// app.get('/api/countries/:name', async (req, res) => {
//   const countryName = req.params.name;

//   try {
//     const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
//     const data = response.data;

//     if (data.length > 0) {
//       res.json(data[0]);
//     } else {
//       res.status(404).json({ error: 'Country not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching country data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.static('public'));

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });










// const express = require('express');
// const cors = require('cors');
// const fetch = require('node-fetch');

// const app = express();
// const port = 5000;

// app.use(cors());

// app.get('/api/countries/:name', async (req, res) => {
//   const countryName = req.params.name;

//   try {
//     const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     const data = await response.json();

//     if (data.length > 0) {
//       res.json(data[0]);
//     } else {
//       res.status(404).json({ error: 'Country not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching country data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });











// const express = require('express');
// const cors = require('cors');
// // const fetch = require('node-fetch');

// const app = express();
// const port = 5000;

// app.use(cors());

// app.get('/api/countries/:name', async (req, res) => {
//   const countryName = req.params.name;

//   try {
//     const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     const data = await response.json();

//     if (data.length > 0) {
//       res.json(data[0]);
//     } else {
//       res.status(404).json({ error: 'Country not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching country data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
