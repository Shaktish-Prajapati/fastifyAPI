/*
@Author: Shaktish Prajapati
@Date: 11-09-2020
*/

const fastify = require('fastify')()

// Register the route
fastify.register(require('./routes/google'),{prefix:'/g'})

// Start the server 
fastify.listen(3000, (error,address)=> {
    if (error) {
        console.log(error)
        process.exit(1)
    } else {
        console.log(`Server listen localhost ${address}`)
    }
})