"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Hendrik Hoekstra",
          email: "hh@hotmail.com",
          phone: 654665433,
          password: "Iamthebest",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Matthijs Tiemens",
          email: "mdt@hotmail.com",
          phone: 654665473,
          password: "Ajax4ever",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sjouke Veenstra",
          email: "sv@hotmail.com",
          phone: 654665429,
          password: "Fryslanboppe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
