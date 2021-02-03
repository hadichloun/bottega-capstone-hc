const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Menu =  new Schema({
    category: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model('Menu', Menu)