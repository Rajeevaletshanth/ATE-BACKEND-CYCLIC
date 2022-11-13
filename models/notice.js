const Sequelize = require('sequelize');
const database = require('../db_connect');


const Notice = database.define('notice', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.STRING,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    device_id: {
        type: Sequelize.STRING,
    },

    device_os: {
        type: Sequelize.STRING,
    },

    title: {
        type: Sequelize.STRING,
    },

    notice: {
        type: Sequelize.STRING,
    },

    extra_note: {
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

module.exports = Notice;