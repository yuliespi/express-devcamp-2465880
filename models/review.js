'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    title: {
      type:DataTypes.STRING,
      validate:{
        isAlpha: true, 
        notEmpty:{
          args:true,
          msg:"Debe llenarse el campo title"
        },
      }
    },
    text: {
      type:DataTypes.STRING,
      validate:{
        isAlpha: true, 
        notEmpty:{
          args:true,
          msg:"Debe llenarse el campo text"
        },
      }
    },
    rating:{
      type:DataTypes.FLOAT,
      validate:{
        notEmpty:{
          args:true,
          msg:"Debe llenarse el campo rating"
        },
      }
    } 
  }, {
    sequelize,
    modelName: 'Review',
    timestamps:false
  });
  return Review;
};