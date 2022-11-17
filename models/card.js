const Sequelize = require('sequelize');
const database = require('../db_connect');


const Card = database.define('card', {

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },       

        user_id:{
            type: Sequelize.INTEGER,
        },

        product_id:{
          type: Sequelize.INTEGER,
        },

        product_name:{
            type: Sequelize.STRING,
        },

        quantity:{
            type: Sequelize.INTEGER,
        },

        price:{
            type: Sequelize.FLOAT,
        },

        note:{
            type: Sequelize.STRING,
        },

        card_draft:{
            type: Sequelize.BOOLEAN,
        },

        is_deleted:{
          type: Sequelize.BOOLEAN,
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

module.exports= Card;