
const express = require('express')

const router = express.Router()
const articles = require('../usecases/articles')
const auth = require('../middlewares/auth')


router.get('/',async (request,response)=>{
    try {
        const allArticles = await articles.getAll()

        response.json({
            success: true,
            data:{
               authors: allArticles
            }
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success:false,
            error: error.message
        })
    }
})

router.post('/', auth, async (request,response)=>{
    try {
        const newArticleData = request.body
        const newArticle = await articles.create(newArticleData)
        response.json({
            success: true,
            data:{
                newArticle
            }
        }) 
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success:false,
            error: error.message
        })
    }
})

router.delete('/:id', auth, async (request,response)=>{
    try {
        const id = request.params.id
        const articleToDelete = await articles.deletee(id)
        response.json({
            success: true,
            data:{
                articleToDelete
            },
            message:'Se ha borrado correctamente'

        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success:false,
            error: error.message
        })
    }  
})

router.patch('/:id', auth, async (request,response)=>{
    try {
        const id = request.params.id
        const dataToUpdate = request.body
        const articleUpdated = await articles.update(id,dataToUpdate)
        response.json({
            success:true,
            data:{
                articleUpdated
            }
        })

    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success:false,
            error: error.message
        })
    } 
})

module.exports = router