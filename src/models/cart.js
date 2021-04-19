const { Schema, model } = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const schemaObj = new Schema({
  user: {
    type: 'ObjectId',
    ref: 'User',
    required: [
      true,
      'User is required',
    ],

  },
  products: {
    type: ['ObjectId'],
    ref: 'Product',
  },
});

schemaObj.plugin(autopopulate);
module.exports = model('Cart', schemaObj);
