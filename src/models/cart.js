const { Schema, model } = require('mongoose');

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
        type: [ 'ObjectId' ],
        ref: 'Product'
    }
});

module.exports = model('Cart', schemaObj);
