const Sequelize = require('sequelize');
const database = require('../db_connect');


const Kitchen = database.define('kitchen', {

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },       

        name:{
            type: Sequelize.STRING,
            allowNull: false
        },

        authority:{
            type: Sequelize.STRING,
            allowNull: false,
        },

        email:{
          type: Sequelize.STRING,
          allowNull: false,
        },

        password:{
            type: Sequelize.STRING,
            allowNull: false,
        },

        phone_no:{
            type: Sequelize.STRING
        },

        description:{
            type: Sequelize.STRING
        },

        min_amount:{
            type: Sequelize.STRING
        },

        offer_type:{
            type: Sequelize.STRING
        },

        offer_value:{
            type: Sequelize.STRING
        },

        max_delivery_time:{
            type: Sequelize.STRING
        },

        vegetarian:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },

        avatar:{
            type: Sequelize.STRING
        },

        opening_time:{
            type: Sequelize.STRING,
            allowNull: false,
        },

        closing_time:{
            type: Sequelize.STRING,
            allowNull: false,
        },

        cuisines:{
            type: Sequelize.STRING
        },
        
        delivery_type:{
            type: Sequelize.STRING
        },

        location:{
            type: Sequelize.STRING,
            allowNull: false
        },

        terms_and_conditions:{
            type: Sequelize.BOOLEAN
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


module.exports= Kitchen;