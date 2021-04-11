const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

db(process.env.MONGO_DB_URI);

const PORT = 3001;

// Import routes
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}`);
});
