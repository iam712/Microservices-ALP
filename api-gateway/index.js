const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors'); 

// Import routes
const driverRoutes = require('./routes/driverRoutes');
const mobilRoutes = require('./routes/mobilRoutes');
const reservasiRoutes = require('./routes/reservasiRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Gateway is running');
});

// Use routes
app.use('/drivers', driverRoutes);
app.use('/mobils', mobilRoutes);
app.use('/reservasis', reservasiRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});
