const Sequelize = require('sequelize');
const database = require('../db_connect');


const Category = database.define('category', {

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },       

        name:{
            type: Sequelize.STRING,
        },

        restaurant_id:{
          type: Sequelize.INTEGER,
        },

        description:{
            type: Sequelize.STRING,
        },

        category_avatar:{
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

module.exports= Category;