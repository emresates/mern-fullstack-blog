const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL_TEMP)
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
