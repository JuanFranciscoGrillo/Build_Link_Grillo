'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Messages', [
      {
        senderId: 1, // Sender User ID
        receiverId: 2, // Receiver User ID
        content: 'Sample message from User 1 to User 2.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more message data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Messages', null, {});
  },
};
