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
    },
    orderStatus: {
        type: 'String',
        required: [
            true,
            'Order status is required'
        ],
        enum: [
            'active',
            'finished',
            'processing',
            'cancelled',
            'refunded',
            'cancelling',
            'refunding'
        ]
    }
});

module.exports = model('Order', schemaObj);
