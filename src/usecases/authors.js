const authors = require('../models/author')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')
const author = require('../models/author')


function getAll () {
    return authors.find()
}

function getById(authorId){
    return authors.findById(authorId)
}

function create (authorData){
    return authors.create(authorData)
}

async function signup (authorData) {
    const { password } = authorData
    const passwordEncripted = await bcrypt.hash(password)
    return authors.create({
        ...authorData,
        password: passwordEncripted
    })
}

async function login (email, passwordPlain) {
    const authorByEmail = await authors.findOne({email})
    if (!authorByEmail) {
        throw new Error('Email not found')
    }

    const isValid = await bcrypt.compare(passwordPlain, authorByEmail.password)
    if (!isValid) {
        throw new Error('Password not valid')
    }
    return jwt.sign({id: authorByEmail._id})
}

function deletee (authorId) {
    return authors.findByIdAndRemove(authorId)
}

function update (authorId, dataUpdate) {
    return authors.findByIdAndUpdate(authorId, dataUpdate)
}

module.exports = {
    getAll,
    getById,
    create,
    deletee,
    update,
    signup,
    login
}