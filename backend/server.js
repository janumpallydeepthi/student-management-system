const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const studentRoutes = require('./routes/students');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const cors = require('cors');
app.use(cors({
  origin: 'https://student-management-system-frontend-nf5j.onrender.com'
}));
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
