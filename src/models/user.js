/* eslint-disable func-names */
const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const autopopulate = require('mongoose-autopopulate');
const argon2 = require('argon2');

const addressesObj = new Schema({
  region: {
    type: 'String',
  },
  province: {
    type: 'String',
  },
  cityOrMunicipality: {
    type: 'String',
  },
  barangay: {
    type: 'String',
  },
  addressLineOne: {
    type: 'String',
  },
  addressLineTwo: {
    type: 'String',
  },
});

const schema = new Schema({
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
  email: {
    type: 'String',
    required: [
      true,
      'Email is required',
    ],
    validate: [
      isEmail,
      'Please input a valid email',
    ],
    index: {
      unique: true,
      collation: {
        lang: 'en',
        strength: 2,
      },
    },
  },
  password: {
    type: 'String',
    required: [
      true,
      'Password is required',
    ],
  },
  addresses: [addressesObj],
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
    default: 9,
  },
  phoneNumber: {
    type: 'String',
    required: [
      true,
      'Phone number is required',
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
  shippingAddresses: {
    type: ['Object'],
  },
  orders: {
    type: ['ObjectId'],
    ref: 'Order',
  },
});

schema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

schema.statics.comparePassword = async function (user, passedPassword) {
  const { password } = user;
  const result = await argon2.verify(password, passedPassword);
  if (result) {
    return true;
  }
  return false;
};

schema.plugin(autopopulate);
module.exports = model('User', schema);
