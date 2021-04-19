const { Schema, model } = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

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
      'Description is required',
    ],
  },
  mainPicture: {
    type: 'String',
  },
  pictures: {
    type: ['String'],
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

schemaObj.plugin(autopopulate);
module.exports = model('Product', schemaObj);
