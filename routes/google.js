async function routes(fastify,option){
    // Route declaration
    fastify.get('/',async (req,res)=>{
        res.redirect('https://www.google.com/')
    })
}

module.exports = routes