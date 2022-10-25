//conecta la bd

const sequelize= require('./seq')
const UserModel = require('../models/user')
//dependencia a dataTypes
const {DataTypes} = require('sequelize')
//crear el modelo
const User = UserModel(sequelize , DataTypes)
//funcion asincrona aync , para conexion

const connect =async () =>{
    try{
        await sequelize.authenticate()
        console.log('conexion establecida'.rainbow);
        //selecionar los usuarios
       //const users = await User.findAll();
      // console.log(users)

       // Create a new user
        const Carlos = await User.create({ name: "Carlos", email: "Do@misena.co",password:"111" });
        console.log("insertando un usuario", Carlos.id);
                
    }catch(error){
        console.error(error)
    }
}

//ejecutar conexion
connect()