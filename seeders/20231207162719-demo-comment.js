'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add seed data for the Comment model here
    await queryInterface.bulkInsert('Comments', [
      {
        userId: 1, // Replace with actual user ID
        postId: 1, // Replace with actual post ID
        content: 'Sample comment text',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more comment data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Add commands to revert seed data for the Comment model here
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
