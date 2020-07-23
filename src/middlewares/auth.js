const jwt = require('../lib/jwt')
const Author = require('../models/author')

async function auth(request, response, next) {
  

  try {
    const { authorization } = request.headers
    console.log('auth: ', authorization)
    const decodedToken = jwt.verify(authorization)
    console.log('decoded token: ', decodedToken)
    const author = await Author.findById(decodedToken.id)
    request.author = author
    next()
  } catch (error) {

    response.json({
      success: false,
      error: error.message
    })
  }
}

module.exports = auth
