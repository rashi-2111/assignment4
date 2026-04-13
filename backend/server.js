require('./config/db');
//middleware
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
//routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
const itemRoutes = require('./routes/itemRoutes');

app.use('/api/items', itemRoutes);

// Test route
app.get('/', (req, res) => {
  res.send("Backend working 🚀");
});
//server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});