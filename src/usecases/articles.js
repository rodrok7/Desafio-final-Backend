const articles = require('../models/article')


function getAll () {
    return articles.find()
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
    create,
    deletee,
    update
}