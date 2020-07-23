const express = require('express')

const router = express.Router()

const author = require('../usecases/authors')


router.post('/sign-up', async (request, response) => {
  try {
    const signedUpAuthor = await author.signup(request.body)

    response.json({
      success: true,
      data: {
        author: signedUpAuthor
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/sign-in', async (request, response) => {
  try {
    const { password, email } = request.body
    const token = await author.login(email, password)
    response.json({
      success: true,
      data: {
        token
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
