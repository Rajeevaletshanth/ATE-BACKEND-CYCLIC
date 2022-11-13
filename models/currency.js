const Sequelize = require('sequelize');
const database = require('../db_connect');


const Currency = database.define('currency', {

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },       

        name:{
            type: Sequelize.STRING,
        },

        code:{
          type: Sequelize.STRING
        },

        status:{
            type: Sequelize.INTEGER,
        },

        is_deleted:{
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

module.exports= Currency;