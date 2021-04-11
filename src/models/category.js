const { Schema, model } = require('mongoose');

const schemaObj = new Schema({
  name: {
    type: 'String',
    required: [
      true,
      'Name of category is required',
    ],
  },
  products: {
    type: ['ObjectId'],
    ref: 'Product',
  },
  _status: {
    type: 'String',
    enum: [
      'active',
      'inactive',
    ],
    default: 'active',
  },
});

module.exports = model('Category', schemaObj);
