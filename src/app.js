console.log('App is starting...');
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('About Me Backend API');
});

app.use('/api/test-runs', require('./routes/testRunRoutes'));

const PORT = process.env.PORT || 5000;

// Start server only after a successful DB connection
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
