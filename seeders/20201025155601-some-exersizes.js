"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "exersizes",
      [
        {
          name: "bench press",
          reps: 8,
          sets: 4,
          workout: "push",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "incline dumbell press",
          reps: 12,
          sets: 4,
          workout: "push",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cable flies",
          reps: 12,
          sets: 4,
          workout: "push",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "shoulder press",
          reps: 12,
          sets: 4,
          workout: "push",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pull up",
          reps: 8,
          sets: 4,
          workout: "pull",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "barbell row",
          reps: 10,
          sets: 4,
          workout: "pull",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "seated row",
          reps: 12,
          sets: 4,
          workout: "pull",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "lat pulldown",
          reps: 10,
          sets: 4,
          workout: "pull",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "squat",
          reps: 12,
          sets: 4,
          workout: "legs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "deadlift",
          reps: 8,
          sets: 4,
          workout: "legs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("exersizes", null, {});
  },
};
