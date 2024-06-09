// routes/resepRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint ke service-resep
const MOBIL_SERVICE_URL = 'http://service-mobil:3000';

router.get('/', async (req, res) => {
    try {
      const response = await axios.get(`${MOBIL_SERVICE_URL}/mobil`);
      res.json(response.data);
    } catch (error) {
      res.status(503).json({ error: 'Service Mobil is unavailable' });
    }
});

module.exports = router