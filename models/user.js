'use strict';

const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Hash a sample password
    const hashedPassword = await bcrypt.hash('your_password_here', 10); // Replace 'your_password_here' with the actual password

    // Add seed data for the User model here
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        profilePicture: 'profile1.jpg',
        bio: 'Sample bio for John Doe.',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more user data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Add commands to revert seed data for the User model here
    await queryInterface.bulkDelete('Users', null, {});
  },
};
