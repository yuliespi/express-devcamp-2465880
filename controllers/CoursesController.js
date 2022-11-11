//objeto de conexion 
const sequelize = require('../config/seq')
//DataTypes
const{DataTypes,ValidationError } = require('sequelize')
//el modelo:
const CoursesModel = require('../models/courses')
//crear el objeto usuario
const Courses = CoursesModel(sequelize, DataTypes)


//POST: crear un nuevo recurso
exports.CrearCourses = async(req , res)=>{
    try {
        const newCourses = await Courses.create(req.body);
    res.status(201).json({
        "success": true,
         "data": newCourses
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
//Traer todos los courses
exports.traerCourses = async (req , res) =>{
    try {
        const courses = await Courses.findAll();
        res.status(200).json({
        "success": true,
         "data": courses
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
exports.traerCoursesPorId = async(req , res)=>{
    try {
        const coursesId = await Courses.findByPk(req.params.id)
        //si usuario no existe
        if(!coursesId){
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
                    "data": coursesId  
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

//PUT - PATCH:

exports.actualizarCourses = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upCourses = await Courses.findByPk(req.params.id)
      if(!upCourses){
        //response de usuario no encontrado
        res.status(422).json(
            {
                "success": false,
                "errors": [
                    "usuario no existe"
                ]  
            }
           )   
       }else{
            //actualizar usuario por id
            await Courses.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            
            const userCour = await Courses.findByPk(req.params.id)
           
            res.status(200).json({
                "success" : true,
                "data" :  userCour
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

//DELETE: borrar un Usuario
exports.borrarCourses = async (req , res)=>{
    //buscar el usuario por id
    try {
        const u = await Courses.findByPk(req.params.id)
        // Borrar usuario 
            await Courses.destroy({
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