const authors = require('../models/author')


function getAll () {
    return authors.find()
}

function create (authorData){
    return authors.create(authorData)
}

function deletee (authorId) {
    return authors.findByIdAndRemove(authorId)
}

function update (authorId, dataUpdate) {
    return authors.findByIdAndUpdate(authorId, dataUpdate)
}

module.exports = {
    getAll,
    create,
    deletee,
    update
}