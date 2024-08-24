const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 4000;


app.use(cors());

app.get('/proxy', async (req, res) => {
    try {
        const imageUrl = req.query.imageURL;

        if (!imageUrl) {
            return res.status(400).send('Image URL is required');
        }

        console.log("Fetching image from........", imageUrl);

        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        res.set('Content-Type', 'image/jpeg');
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching the image:', error.message);
        res.status(500).send('Error fetching the image');
    }
});


app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});

