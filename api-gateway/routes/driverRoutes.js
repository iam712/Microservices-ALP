// routes/resepRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint to the driver service
const DRIVER_SERVICE_URL = 'http://service-driver:3001';

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${DRIVER_SERVICE_URL}/driver`);
        res.json(response.data);
    } catch (error) {
        res.status(503).json({ error: 'Service Driver is unavailable' });
    }
});

module.exports = router;
