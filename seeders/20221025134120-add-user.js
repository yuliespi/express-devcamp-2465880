'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    // Add seed commands here.
     
     Example:
     await queryInterface.bulkInsert('users', [{
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
    
     //Add commands to revert seed here.
     
     Example:
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
