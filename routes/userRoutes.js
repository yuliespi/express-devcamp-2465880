const express = require('express')
const { json } = require('sequelize')
const {CrearUser,
    traerUserPorId,
        traerUsario,
        borrarUser,
        actualizarUser
        }=require('../controllers/UserController')

const router = express.Router()

// rutas de usuario
router.route('/')
        .get(traerUsario)
        .post(CrearUser)
router.route('/:id')    
            .get(traerUsario)
            .put(actualizarUser)
            .post(borrarUser)


module.exports = router