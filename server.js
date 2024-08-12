const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb://localhost:27017/mern-todo')
  .then(() => {
      console.log("Connected to Todo list db");
  })
  .catch(err => {
      console.error("Could not connect to MongoDB...", err);
  });
const authRoutes = require('./Routes/auth');
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
