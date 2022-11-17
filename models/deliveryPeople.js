const Sequelize = require('sequelize');
const database = require('../db_connect');


const DeliveryPeople = database.define('delivery_people', {

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        restaurant_id:{
            type: Sequelize.INTEGER,
        },

        name:{
            type: Sequelize.STRING,
        },

        email:{
            type: Sequelize.STRING,
            allowNull: false,
          },

        address:{
            type: Sequelize.STRING,
        },

        latitude:{
            type: Sequelize.FLOAT,
        },

        longtitude:{
            type: Sequelize.FLOAT,
        },

        image:{
            type: Sequelize.STRING,
        },

        country_code:{
            type: Sequelize.STRING,
        },
        
        phone_no:{
            type: Sequelize.STRING,
        },

        device_id:{
            type: Sequelize.STRING,
        },

        device_os:{
            type: Sequelize.STRING,
        },

        delivery_status:{
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

module.exports= DeliveryPeople;