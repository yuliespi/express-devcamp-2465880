//objeto de conexion 
const sequelize = require('../config/seq')
//DataTypes
const{DataTypes,ValidationError } = require('sequelize')
//el modelo:
const UserModel = require('../models/user')
const user = require('../models/user')
//crear el objeto usuario
const User = UserModel(sequelize, DataTypes)


//crear rutas(endpoint, uri ) para los Usuarios
//get:obtener datos read

exports.traerUsario = async (req , res) =>{
    try {
        const users = await User.findAll();
        res.status(200).json({
        "success": true,
         "data": users
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
exports.traerUserPorId = async(req , res)=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //si usuario no existe
        if(!userId){
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
                    "data": userId  
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
exports.CrearUser = async(req , res)=>{
    try {
        const newUser = await User.create(req.body);
    res.status(201).json({
        "success": true,
         "data": newUser
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

exports.actualizarUser = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upUser = await User.findByPk(req.params.id)
      if(!upUser){
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
            await User.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const userAct = await User.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  userAct
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
exports.borrarUser = async (req , res)=>{
//buscar el usuario por id
try {
    const u = await User.findByPk(req.params.id)
    // Borrar usuario 
        await User.destroy({
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