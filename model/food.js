const mongoose = require('mongoose')
const Schema1 = new mongoose.Schema({
    url: { type: String, required: true },
    name: { type: String, required: true },
    rating:{ type: String, required:true},
    address:{type:String,required:true }
})

module.exports = mongoose.model('food',Schema1)