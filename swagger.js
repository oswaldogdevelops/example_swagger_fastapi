const swaggerJSdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
    definition : {
       // openapi:"3.0.0",
        info:{title: "api_prueba", version: "1.0.0"},
    },
    servers:["http://localhost:3000"],
    apis:["./routes/auth.js"],


}

const swaggerSpec = swaggerJSdoc(options)

const swaggerDocs = (app, port) =>{
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get('/', (req,res) => {
        res.setHeader('Content-Type','application/json')
        res.send(swaggerSpec)
    })
}



module.exports = {swaggerDocs}