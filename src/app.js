console.log('App is starting...');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://artsenius.github.io',
    'https://www.arthursenko.com'
  ],
  methods: ['GET', 'POST'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('About Me Backend API');
});

app.use('/api/test-runs', require('./routes/testRunRoutes'));

const PORT = process.env.PORT || 5000;

// Start server only after a successful DB connection
(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
