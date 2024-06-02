'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const majorsData = [];

    for (let i = 1; i <= 5; i++){
      majorsData.push({
        name: ` Major ${i}`,
        description:'',
        created_at: new Date(),
        updated_at: new Date(),
      })
    }
    return queryInterface.bulkInsert('majors', majorsData);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('majors', null, {});
  }
};
