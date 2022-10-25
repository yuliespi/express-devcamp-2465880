const express = require('express')

const router = express.Router()

//Establecer las rutas del bootcamp

//crear rutas(endpoint, uri ) para los Usuarios
//get:obtener datos read

router.get('/', (req , res) =>{
    res.status(200).json(
        {
            "message": "aqui se van a mostrar todos los usuarios"
        }
    )
})

//obtener recursos por id 
router.get('/:id' , (req , res)=>{
    res.status(200).json(
        {
            "message": `aqui se van a mostrar el Usuario cuyo id es: ${req.params.id}`
        }
    )
})

//POST: crear un nuevo recurso
router.post('/' , (req , res)=>{
    res.status(201).json(
        {
            "message": `aqui se va a hacer  un Usuario`
        }
    )
})

//PUT - PATCH:

router.put('/:id', (req , res)=>{
    res.status(201).json(
        {
            "message": `aqui se va a actualizar el usuario ${req.params.id}`
        }
    )
})

//DELETE: borrar un Usuario
router.delete('/:id' , (req , res)=>{
    res.status(201).json(
        {
            "message": `aqui se va a borrar el Usuario ${req.params.id}`
        }
    )
})

module.exports = router