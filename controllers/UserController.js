//objeto de conexion 
const sequelize = require('../config/seq')
//DataTypes
const{DataTypes} = require('sequelize')
//el modelo:
const UserModel = require('../models/user')
//crear el objeto usuario
const User = UserModel(sequelize, DataTypes)

//crear rutas(endpoint, uri ) para los Usuarios
//get:obtener datos read

exports.traerUsario = async (req , res) =>{
    const users = await User.findAll();
    res.status(200).json({
        "success": true,
         "data": users
    })
    
}

//obtener recursos por id 
exports.traerUserPorId = async(req , res)=>{
    const UserId = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "success": true,
             "data": UserId
        }
    )
}

//POST: crear un nuevo recurso
exports.CrearUser = async(req , res)=>{
    const newUser = await User.create(req.params.id);
    res.status(201),json({
        "success": true,
         "data": newUser
    })

}

//PUT - PATCH:

exports.actualizarUser = async(req , res)=>{
    //actualizar usuario por id
    await User.update(req.body,{
        where: {
            id:req.params.id
        }
    });
    //consultar datos actualizados
    const upUser = await User.findByPk(req.body);
    res.status(201).json(
        {
            "success": true,
            "data": upUser
        }
    )
}

//DELETE: borrar un Usuario
exports.borrarUser = async (req , res)=>{
//buscar el usuario por id

    const u = await User.findByPk(req.params.id)
    // Borrar usuario 
        await User.destroy({
            where: {
            id: req.params.id
            }
        });
    res.status(200).json(
        {
            "success": true,
            "data": u
        }
    )
}