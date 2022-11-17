const Sequelize = require('sequelize');
const database = require('../db_connect');


const ComboMenu = database.define('combo_menu', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.STRING,
    },

    description: {
        type: Sequelize.STRING,
    },

    discount: {
        type: Sequelize.FLOAT,
    },

    max_quantity: {
        type: Sequelize.INTEGER,
    },

    is_availability: {
        type: Sequelize.BOOLEAN,
    },

    menu_avatar: {
        type: Sequelize.STRING,
    },

    is_deleted: {
        type: Sequelize.BOOLEAN
    },

    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
    },

    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
    }
}, {
    // options
    freezeTableName: true
});

// Admin.sync({ force: true })

module.exports = ComboMenu;