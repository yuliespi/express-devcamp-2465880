'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {

    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
          msg:"Debe llenarse el campo title"
        },
      }
    },
    weeks: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric: true,
        notEmpty:{
          args:true,
          msg:"Debe llenarse el campo name"
        },      
        len:{
          args:[2, 5],
          msg:"Las semanas debe ser mas de 10 dias"
        },
      }
    },
    enroll_cost:{
      type:DataTypes.FLOAT,
      validate:{
        isFloat: true,
        notEmpty:{
          args:true,
          msg:"Debe llenarse el campo name"
        },
      }
    },
    minimum_skill: {
      type: DataTypes.STRING,

      notEmpty:{
        args:true,
        msg:"Debe llenarse el campo name"
      },
      notNull:true,
  }
 },
  {
    sequelize,
    modelName: 'Courses',
    timestamps:false
  });
  return Courses;

};