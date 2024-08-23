const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the CORS package

const app = express();
const PORT = 4000;

// Use the CORS middleware
app.use(cors()); // This will enable CORS for all routes

app.get('/proxy', async (req, res) => {
    try {
        const imageUrl = 'https://www.deeparteffects.com/images/generated/7786445c-8fbb-4710-b0df-22f4fd3a1764.jpg';
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        res.set('Content-Type', 'image/jpeg');
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching the image:', error);
        res.status(500).send('Error fetching the image');
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});

