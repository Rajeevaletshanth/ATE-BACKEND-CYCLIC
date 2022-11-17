const Sequelize = require('sequelize');
const database = require('../db_connect');


const Promotion = database.define('promotion', {

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },       

        promotion_name:{
            type: Sequelize.STRING,
        },

        product_id:{
          type: Sequelize.INTEGER,
        },

        product_name:{
            type: Sequelize.STRING,
        },

        discount:{
            type: Sequelize.FLOAT,
        },

        quantity:{
            type: Sequelize.INTEGER,
        },

        vaild_date:{
            type: Sequelize.STRING,
        },

        description:{
            type: Sequelize.STRING,
        },

        promotion_avater:{
            type: Sequelize.STRING,
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

module.exports= Promotion;