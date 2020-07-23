

function knowMethod (request,response,next){
    try {
        const method = request.method
        const url = request.url
        const body =  JSON.stringify(request.body)  
        console.log('Lee aqui: ')
        console.log(`[${method}]: ${url} - ${body}`)
    next()  
    } catch (error) {
            response.json({
                success: false,
                error: error.message
            })
    }

}

module.exports = knowMethod