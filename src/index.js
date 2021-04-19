/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const MongoDBStoreSession = require('connect-mongodb-session')(session);
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors({
  credentials: true,
}));

db(process.env.MONGO_DB_URI);

// Session store
const store = MongoDBStoreSession({
  uri: process.env.MONGO_DB_URI,
  collection: 'sessions',
});
store.on('error', (error) => console.log('Error: ', error));

// Session
app.use(session({
  secret: process.env.SECRET_KEY,
  name: 'session_name',
  saveUninitialized: false,
  resave: false,
  store,
}));

// Import routes
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/auth');

app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
