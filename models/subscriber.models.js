const mongoose = require('mongoose')


const subscriberSchema = new mongoose.Schema({
    matricule: {
        type: Number,
        required: [true, "matricule est neccessaire"]
    },
    lastName: {
        type: String,
        required: [true, "lastName est neccessaire"]
    },
    firstName: {
        type: String,
        required: [true, "firstName est neccessaire"]
    },
    email: {
        type: String,
        required: [true, "email est neccessaire"]
    },
    phone: {
        type: String,
        required: [true, "phone est neccessaire"]
    },

    address: {
        type: Array,
        required: [true, "phone est neccessaire"],
        default: []
    },
    
})

module.exports = mongoose.model('Subscriber', subscriberSchema)