'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('Emails', 'UserId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'Users',
        referencesKey: 'id',
        onDelete: 'CASCADE'
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('Emails', 'UserId');
  }
};
