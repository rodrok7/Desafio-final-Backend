
const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    tittle:{
    type: String,
    required: true
    },
    content: {
    type: String,
    require: true
    },
    category: {
    type: String,
    required: true
    },
    date: {
    type: Date,
    required: true
    },
    author: {
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('articles', articleSchema)