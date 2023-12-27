const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/countries/:name', async (req, res) => {
  const countryName = req.params.name;

  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();

    if (data.length > 0) {
      res.json(data[0]);
    } else {
      res.status(404).json({ error: 'Country not found' });
    }
  } catch (error) {
    console.error('Error fetching country data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// const express = require('express');
// const fetch = require('node-fetch');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'client')));

// app.get('/country/:name', async (req, res) => {
//     const { name } = req.params;

//     try {
//         const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
//         const data = await response.json();

//         if (data.length > 0) {
//             res.json(data[0]);
//         } else {
//             res.status(404).json({ error: 'Country not found' });
//         }
//     } catch (error) {
//         console.error('Error fetching country data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
