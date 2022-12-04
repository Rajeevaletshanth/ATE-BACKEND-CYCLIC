const Sequelize = require('sequelize');
const database = require('../db_connect');


const AddToCart = database.define('addtocart', {

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        user_id:{
            type: Sequelize.INTEGER,
        },
        
        restaurant_id:{
            type: Sequelize.INTEGER,
        },

        product_id:{
            type: Sequelize.INTEGER,
        },

        addons:{
            type: Sequelize.STRING,
        },

        qty:{
            type: Sequelize.INTEGER,
        },

        status:{
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

module.exports= AddToCart;