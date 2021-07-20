// IMPORTS
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const multer = require('multer');
const path = require('path');

// DOTENV CONFIGURED
dotenv.config();

// MONGODB CONNECTED
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB');
  }
);

app.use('/images', express.static(path.join(__dirname, 'public/images')));

// MIDDLEWARES
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File uploded successfully');
  } catch (error) {
    console.error(error);
  }
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.get('/', (req, res) => {
  app.use(
    express.static(path.resolve(__dirname, 'react-tailwind-ui', 'build'))
  );
  res.sendFile(
    path.resolve(__dirname, 'react-tailwind-ui', 'build', 'index.html')
  );
});

// BACKEND SEREVER PORT
app.listen(8800, () => {
  console.log('Backend server is running!');
});
