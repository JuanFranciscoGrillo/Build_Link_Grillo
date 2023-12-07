'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add seed data for the Application model here
    await queryInterface.bulkInsert('Applications', [
      {
        userId: 1, // Replace with actual user ID
        postId: 1, // Replace with actual post ID
        coverLetter: 'Sample cover letter text',
        resume: 'resume_file.pdf', // Replace with the actual file path or URL
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more application data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Add commands to revert seed data for the Application model here
    await queryInterface.bulkDelete('Applications', null, {});
  },
};
