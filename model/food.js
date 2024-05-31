const mongoose = require('mongoose')
const Schema1 = new mongoose.Schema({
    url: { type: String, required: true },
    name: { type: String, required: true },
    rating:{ type: String, required:true},
    type:{type:String}
})

module.exports = mongoose.model('food',Schema1)