const { Schema, model } = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

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
    autopopulate: true,
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

schemaObj.plugin(autopopulate);
module.exports = model('Category', schemaObj);
