// routes/resepRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint ke service-resep
const RESERVASI_SERVICE_URL = 'http://service-reservasi:8000';

router.get('/', async (req, res) => {
    try {
      const response = await axios.get(`${RESERVASI_SERVICE_URL}/api/reservasi`);
      res.json(response.data);
    } catch (error) {
      res.status(503).json({ error: 'Service Reservasi is unavailable' });
    }
});

module.exports = router