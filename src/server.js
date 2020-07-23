
const express = require('express')
const cors = require('cors')

const app = express()

const authorsRouter = require('./routes/authors')
const articlesRouter = require('./routes/articles')
const authRouter = require('./routes/auth')
app.use(cors())
app.use(express.json())


app.use('/authors',authorsRouter)
app.use('/articles',articlesRouter)
app.use('/auth', authRouter)
module.exports = app
