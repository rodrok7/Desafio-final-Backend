const articles = require('../models/article')



function getAll () {
    return articles.find()
}

function getById(articleId){
    return articles.findById(articleId)
}

function create (articleData){
    return articles.create(articleData)
}

function deletee (articleId) {
    return articles.findByIdAndRemove(articleId)
}

function update (articleId, dataUpdate) {
    return articles.findByIdAndUpdate(articleId, dataUpdate)
}

module.exports = {
    getAll,
    getById,
    create,
    deletee,
    update
}