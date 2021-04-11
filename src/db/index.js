const mongoose = require('mongoose');

module.exports = (dbUri) => {
  mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(() => {
    // eslint-disable-next-line no-console
    console.log('Database is running');
  });
};
