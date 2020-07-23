
const express = require('express')
const cors = require('cors')

const app = express()

const authorsRouter = require('./routes/authors')
const articlesRouter = require('./routes/articles')

app.use(cors())
app.use(express.json())

app.use('/authors',authorsRouter)
app.use('/articles',articlesRouter)

module.exports = app
