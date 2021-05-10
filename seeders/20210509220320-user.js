'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    Example:
    await queryInterface.bulkInsert('users', [{
      firstName: 'raouf',
      lastName: 'nasr',
      email: 'raouf@gmail.com',
      password: '123456',
      role: 'admin'
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
