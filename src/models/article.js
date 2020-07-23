
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
    section: {
    type: String,
    required: true
    },
    date: {
    type: Date,
    required: true
    },
    writer: {
    
    }

})

module.exports = mongoose.model('articles', articleSchema)