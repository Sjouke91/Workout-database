"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "workouts",
      [
        {
          name: "push",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pull",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "legs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("workouts", null, {});
  },
};
