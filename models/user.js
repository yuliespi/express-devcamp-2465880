'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: {
          args: true,
          msg:"Error no escribir numeros"
        },
        notEmpty:{
          args:true,
          msg:"Debe llenarse el campo name"
        },
        notNull:true,
      }
    }, 
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
          
          notEmpty:{
            args:true,
            msg:"Debe llenarse el campo name"
          },
          notNull:true,
          isEmail:{
            args:true,
            msg:"email debe ser valido"
          },
          isEmail:{
            args: true,
            msg: 'Email deve tener @'
          }
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        len:{
          args:[5, 10],
          msg:"La contraseña debe tener entre 5 y 10 caracteres"
        }
      }

    },
  },{
    sequelize,
    modelName: 'User',
    timestamps:false
  });
  return User;
};