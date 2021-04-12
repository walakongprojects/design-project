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
    paid: {
        type: 'Boolean',
        default: false
    },
    shippingDetails: {
        type: [ 'ObjectId' ],
        ref: 'Shipping'
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
    },
    totalPrice: {
        type: 'Number',
        required: [
            true,
            'Total Price is required'
        ]
    }
});

schemaObj.plugin(autopopulate);
module.exports = model('Order', schemaObj);
