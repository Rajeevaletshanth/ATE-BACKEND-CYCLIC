const Sequelize = require('sequelize');
const database = require('../db_connect');


const Restaurant = database.define('restaurant', {

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        name:{
            type: Sequelize.STRING,
        },

        category_id:{
            type: Sequelize.INTEGER,
        },

        restaurant_id:{
            type: Sequelize.INTEGER,
        },

        description:{
            type: Sequelize.STRING,
        },

        food_type:{
            type: Sequelize.STRING,
        },

        is_availability:{
            type: Sequelize.BOOLEAN,
        },

        price:{
            type: Sequelize.FLOAT,
        },

        quantity:{
            type: Sequelize.INTEGER,
        },

        is_addons:{
            type: Sequelize.BOOLEAN,
        },

        offer:{
            type: Sequelize.INTEGER,
        },

        product_avatar:{
            type: Sequelize.STRING,
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

module.exports= Restaurant;