const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/cats', async (req, res) => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cat images' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
