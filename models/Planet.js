const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    velocity: {
        type: Number,
        required: true,
        min: 0,
    },
    distance: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        required: true,
    },
    wifi: {
        type: String,
        enum: ['yes', 'no']
    }
}); 

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;
