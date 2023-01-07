const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL_TEMP)
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use('/backend/auth', authRoute);
app.use('/backend/users', userRoute);
app.use('/backend/posts', postRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
