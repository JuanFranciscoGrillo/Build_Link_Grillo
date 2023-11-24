'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'Sample Post 1',
        description: 'Description for Sample Post 1.',
        location: 'Sample Location 1',
        budget: 1000.0,
        requiredSkills: 'Skill 1, Skill 2',
        deadline: new Date('2023-12-31'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more post data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
