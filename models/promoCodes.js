const Sequelize = require('sequelize');
const database = require('../db_connect');


const PromoCodes = database.define('promocodes', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    promocodes: {
        type: Sequelize.STRING,
    },

    discount: {
        type: Sequelize.FLOAT,
    },

    usagelimit_percoupon: {
        type: Sequelize.INTEGER,
    },

    usagelimit_peruser: {
        type: Sequelize.INTEGER,
    },

    type: {
        type: Sequelize.STRING,
    },

    promocodetype: {
        type: Sequelize.STRING,
    },

    avaiable_from: {
        type: Sequelize.STRING,
    },

    expired_date: {
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

module.exports = PromoCodes;