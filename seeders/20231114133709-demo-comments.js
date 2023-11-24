'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
        userId: 1, // User ID
        postId: 1, // Post ID
        content: 'Sample comment for Post 1 by User 1.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more comment data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
