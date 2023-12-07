'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add seed data for the Post model here
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'Sample Post 1',
        content: 'This is a sample post content.',
        userId: 1, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sample Post 2',
        content: 'This is another sample post content.',
        userId: 2, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more post data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Add commands to revert seed data for the Post model here
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
