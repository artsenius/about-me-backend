console.log('App is starting...');
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('About Me Backend API');
});

app.use('/api/test-runs', require('./routes/testRunRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
