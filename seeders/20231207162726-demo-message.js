'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add seed data for the Message model here
    await queryInterface.bulkInsert('Messages', [
      {
        senderId: 1, // Replace with actual sender user ID
        receiverId: 2, // Replace with actual receiver user ID
        content: 'Sample message content',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more message data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Add commands to revert seed data for the Message model here
    await queryInterface.bulkDelete('Messages', null, {});
  },
};
