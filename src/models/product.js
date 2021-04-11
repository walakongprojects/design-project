const { Schema, model } = require('mongoose');

const schemaObj = new Schema({
  name: {
    type: 'String',
    required: [
      true,
      'Name of product is required',
    ],
  },
  description: {
    type: 'String',
    required: [
      true,
      'Last name is required',
    ],
  },
  quantity: {
    type: 'Number',
    required: [
      true,
      'Quantity is required.',
    ],
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

module.exports = model('Product', schemaObj);
