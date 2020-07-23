
const express = require('express')

const router = express.Router()
const authors = require('../usecases/authors')
const auth = require('../middlewares/auth')


router.get('/',async (request,response)=>{
    try {
        const allAuthors = await authors.getAll()

        response.json({
            success: true,
            data:{
               authors: allAuthors
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

router.get('/:id',async(request,response) =>{
    try {
        const authorId = request.params.id
        const author = await authors.getById(authorId)
        response.json({
            success: true,
            data: {
                author
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
        const newAuthorData = request.body
        const newAuthor = await authors.create(newAuthorData)
        response.json({
            success: true,
            data:{
                newAuthor
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
        const authorToDelete = await authors.deletee(id)
        response.json({
            success: true,
            data:{
                authorToDelete
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
        const authorUpdated = await authors.update(id,dataToUpdate)
        response.json({
            success:true,
            data:{
                authorUpdated
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