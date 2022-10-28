const express = require('express')
const dontenv = require('dotenv')//importacion de puerto
const colors = require('colors')
const listEndpoints = require ('express-list-endpoints')

const bootcampRoutes = require ('./routes/BootcampsRoutes')
const userRoutes = require('./routes/userRoutes')

//establecer el archivo de configuracion, con variables de entorno del proyecto
dontenv.config({
    path:'./config_env/config.env'
})

//1 crear el objeto app 
const app = express()
app.use(express.json())

//dependencias de la conexion db
const connect =require('./config/db')

app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/users' , userRoutes)

console.log(listEndpoints(app))

//2. crear ruta de prueba
/*app.get('/' , (request , response)=>{
    response.send('Ruta funcional')
})*/
  
//3. ejecutar servidor de desarrollo express

app.listen(process.env.PORT , ()=>{
    console.log(`servidor iniciado con puerto: ${process.env.PORT}`.bgYellow)
})