const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL_TEMP)
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, 'hello.jpeg');
  },
});
const upload = multer({ storage: storage });
app.post('/backend/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/backend/auth', authRoute);
app.use('/backend/users', userRoute);
app.use('/backend/posts', postRoute);
app.use('/backend/categories', categoriesRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
