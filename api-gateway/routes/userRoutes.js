// routes/resepRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint ke service-resep
const USER_SERVICE_URL = 'http://service-user:8001';

router.get('/', async (req, res) => {
    try {
      const response = await axios.get(`${USER_SERVICE_URL}/api/user`);
      res.json(response.data);
    } catch (error) {
      res.status(503).json({ error: 'Service User is unavailable' });
    }
});

module.exports = router