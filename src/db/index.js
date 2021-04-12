// eslint-disable no-console
const mongoose = require('mongoose');

module.exports = (dbUri) => {
  mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Database is running');
  })
  .catch((err) => {
    console.log('Failed to connect to database: ', err);
  })
};
