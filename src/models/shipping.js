const { Schema, model } = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const schemaObj = new Schema({
    rider: {
        name: {
            type: 'String',
            required: [
                true,
                'Rider name is required'
            ],
        },
        phoneNumber: {
            type: 'String',
            required: [
                true,
                'Rider\'s phone number is required'
            ],
        },
    },
    status: {
        type: 'String',
        required: [
            true,
            'Status of delivery is required'
        ],
        enum: [
            'pending',
            'delivering',
            'delivered',
        ]
    },
    price: {
        type: 'Number',
        required: [
            true,
            'Shipping price is required'
        ]
    },
    address: {
        type: 'String',
        required: [
            true,
            'Shipping address is required'
        ]
    }
});

schemaObj.plugin(autopopulate);
module.exports = model('Shipping', schemaObj);
