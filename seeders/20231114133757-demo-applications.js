'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Applications', [
      {
        userId: 1, // User ID
        postId: 1, // Post ID
        coverLetter: 'Sample cover letter for Application 1 by User 1.',
        resume: 'resume1.pdf',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more application data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Applications', null, {});
  },
};
