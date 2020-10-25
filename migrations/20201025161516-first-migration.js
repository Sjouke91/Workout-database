"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "exersizes",
      "weight",
      { type: Sequelize.INTEGER },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("exersizes", "weight", {});
  },
};
