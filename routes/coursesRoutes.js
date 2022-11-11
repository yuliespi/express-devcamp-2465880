const express = require('express')
const { json } = require('sequelize')
const {CrearCourses,
        traerCoursesPorId,
        traerCourses,
        borrarCourses,
        actualizarCourses
        }=require('../controllers/CoursesController')

const router = express.Router()

// rutas de courses
router.route('/')
        .get(traerCourses)
        .post(CrearCourses)
router.route('/:id')    
            .get(traerCoursesPorId)
            .put(actualizarCourses)
            .delete(borrarCourses)


module.exports = router