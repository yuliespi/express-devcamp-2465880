'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     Example:
     await queryInterface.bulkInsert('courses', [{
      name: 'Yuliani',
      email: 'asj@misena.edu.co',
      password:'123456'
     },
   {
     name: 'Paula',
      email: 'pau@misena.co',
      password:'123'
   }
 ], {});
   
 },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
     
  }
};
 