const express = require('express')
const { json } = require('sequelize')
const {CrearReview,
    traerReviewPorId,
    traerReview,
    borrarReview,
    actualizarReview
        }=require('../controllers/ReviewsController')

const router = express.Router()

router.route('/')
        .get(traerReview)
        .post(CrearReview)
router.route('/:id')    
            .get(traerReviewPorId)
            .put(actualizarReview)
            .delete(borrarReview)
module.exports = router