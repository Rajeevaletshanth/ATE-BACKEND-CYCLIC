const Sequelize = require('sequelize');
const database = require('../db_connect');


const NoticePushNotification = database.define('notice_push_notification', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    sent_to_type: {
        type: Sequelize.INTEGER,
    },

    message: {
        type: Sequelize.STRING,
    },

    push_type: {
        type: Sequelize.STRING,
    },

    send_date: {
        type: Sequelize.FLOAT,
    },

    send_time: {
        type: Sequelize.FLOAT,
    },

    sent_status: {
        type: Sequelize.INTEGER,
    },

    sent_on: {
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

module.exports = NoticePushNotification;