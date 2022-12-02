const Sequelize = require('sequelize');
const database = require('../db_connect');


const Addons = database.define('addons', {

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

        price:{
            type: Sequelize.FLOAT,
        },

        addons_avatar:{
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

module.exports= Addons;