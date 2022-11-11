//objeto de conexion 
const sequelize = require('../config/seq')
//DataTypes
const{DataTypes,ValidationError } = require('sequelize')
//el modelo:
const ReviewModel = require('../models/review')
//crear el objeto usuario
const Review = ReviewModel(sequelize, DataTypes)


//crear rutas(endpoint, uri ) para los Usuarios
//get:obtener datos read

exports.traerReview = async (req , res) =>{
    try {
        const reviews = await Review.findAll();
        res.status(200).json({
        "success": true,
         "data": reviews
    })
    } catch (error) {
        res
        .status(500)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }
    
}

//obtener recursos por id 
exports.traerReviewPorId = async(req , res)=>{
    try {
        const reviewsId = await Review.findByPk(req.params.id)
        //si usuario no existe
        if(!reviewsId){
            res.status(422).json(
                {
                    "success": false,
                    "errors": [
                        "usuario no existe"
                    ]  
                }
               )   
        }else{
            res.status(200).json(
                {
                    "success": true,
                    "data": reviewsId  
                }
               )   
        }     
    } catch (error) {
        res
        .status(500)
        .json({
             "success": false, 
             "errors":  "error de servidor"  
        })
    }
}

//POST: crear un nuevo recurso
exports.CrearReview = async(req , res)=>{
    try {
        const newReview = await Review.create(req.body);
    res.status(201).json({
        "success": true,
         "data": newReview
    })
        
    } catch (error) {
        //poner los mensajes de error de una variable
        //llevar errores al responisve
     if(error instanceof ValidationError){
        res
        .status(422)
        .json({
            "success": false,
            "errors": error.errors.map((e)=>e.message)
        })
    
    }else{
        //errores de servidor
        res
        .status(500)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }

}
}

//PUT - PATCH:

exports.actualizarReview = async(req , res)=>{
    try {
       
      const upreview = await Review.findByPk(req.params.id)
      if(!upreview){
      
        res.status(422).json(
            {
                "success": false,
                "errors": [
                    "review no existe"
                ]  
            }
           )   
       }else{
            
            await Review.update(req.body, {
                where: {
                id: req.params.id
                }
            });
           
            const reviewRev = await Review.findByPk(req.params.id)
            
            res.status(200).json({
                "success" : true,
                "data" :  reviewRev
            })
       }
    } catch (error) {
        res
        .status(500)
        .json({
             "success": false, 
             "errors":  "error de servidor"  
        })
    }
}

//DELETE: borrar un review
exports.borrarReview = async (req , res)=>{

try {
    const u = await Review.findByPk(req.params.id)
   
        await Review.destroy({
            where: {
            id: req.params.id
            }
        })
        res.status(200).json(
            {
                "success": true,
                "data": u
            }
        )
} catch (error) {
    res
        .status(500)
        .json({
             "success": false, 
             "errors":  "error de servidor"  
        })
}
    
}