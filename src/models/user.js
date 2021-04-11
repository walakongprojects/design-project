const { Schema, model } = require('mongoose');

const schemaObj = new Schema({
  firstName: {
    type: 'String',
    required: [
      true,
      'First name is required',
    ],
  },
  lastName: {
    type: 'String',
    required: [
      true,
      'Last name is required',
    ],
  },
  middleName: {
    type: 'String',
  },
  suffix: {
    type: 'String',
  },
  /*
    1 = admin
    9 = normal user
  */
  role: {
    type: 'Number',
    required: [
      true,
      'Role is required',
    ],
  },
  phoneNumber: {
    type: 'String',
    required: [
      true,
      'Phone number is required',
    ],
  },
  region: {
  },
  province: {
  },
  cityOrMunicipality: {
  },
  barangay: {
  },
  addressLineOne: {
    type: 'String',
    required: [
      true,
      'Address Line 1 is required.',
    ],
  },
  addressLineTwo: {
    type: 'String',
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

module.exports = model('User', schemaObj);
