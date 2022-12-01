const Sequelize = require('sequelize');
const database = require('../db_connect');


const Settings = database.define('settings', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    site: {
        type: Sequelize.STRING,
    },

    logo: {
        type: Sequelize.STRING,
    },

    favicon: {
        type: Sequelize.STRING,
    },

    copyright: {
        type: Sequelize.STRING,
    },

    currency: {
        type: Sequelize.STRING,
    },

    currencycode: {
        type: Sequelize.STRING,
    },

    twilotoken: {
        type: Sequelize.STRING,
    },

    twilionumber: {
        type: Sequelize.STRING,
    },

    pub_pub_key: {
        type: Sequelize.STRING,
    },

    pub_sub_key: {
        type: Sequelize.STRING,
    },

    client_id: {
        type: Sequelize.STRING,
    },

    client_secret: {
        type: Sequelize.STRING,
    },

    default_language: {
        type: Sequelize.STRING,
    },

    customer_username: {
        type: Sequelize.STRING,
    },
    
    terms_user: {
        type: Sequelize.STRING,
    },

    terms_restaurants: {
        type: Sequelize.STRING,
    },

    default_location: {
        type: Sequelize.STRING,
    },

    amount_referral: {
        type: Sequelize.STRING,
    },

    payment: {
        type: Sequelize.STRING,
    },

    stripe_charge: {
        type: Sequelize.STRING,
    },

    stripe_publish_key: {
        type: Sequelize.STRING,
    },

    stripe_secret: {
        type: Sequelize.STRING,
    },

    stripe_url: {
        type: Sequelize.STRING,
    },

    productorder: {
        type: Sequelize.STRING,
    },

    dispute_responsetime: {
        type: Sequelize.STRING,
    },

    search_distance: {
        type: Sequelize.STRING,
    },

    deliveryman_responsetime: {
        type: Sequelize.STRING,
    },

    dish_commission: {
        type: Sequelize.STRING,
    },

    delivery_fee: {
        type: Sequelize.STRING,
    },

    orderlimit_min: {
        type: Sequelize.STRING,
    },

    orderlimit_max: {
        type: Sequelize.STRING,
    },

    order_assinged: {
        type: Sequelize.STRING,
    },

    android_env: {
        type: Sequelize.STRING,
    },

    android_pushkey: {
        type: Sequelize.STRING,
    },
    
    ios_user_env: {
        type: Sequelize.STRING,
    },

    ios_provider_env: {
        type: Sequelize.STRING,
    },

    android_applink: {
        type: Sequelize.STRING,
    },

    ios_applink: {
        type: Sequelize.STRING,
    },

    iosprovider_pushpassword: {
        type: Sequelize.STRING,
    },

    iosshop_env: {
        type: Sequelize.STRING,
    },

    iosshop_pushpassword: {
        type: Sequelize.STRING,
    },

    iosuser_pushpassword: {
        type: Sequelize.STRING,
    },

    iosuser_topic: {
        type: Sequelize.STRING,
    },

    iosuser_apppassword: {
        type: Sequelize.STRING,
    },

    iosprovider_apptopic: {
        type: Sequelize.STRING,
    },

    iosprovider_apppassword: {
        type: Sequelize.STRING,
    },

    iosshop_apptopic: {
        type: Sequelize.STRING,
    },

    iosshop_apppassword: {
        type: Sequelize.STRING,
    },

    googlemap_key: {
        type: Sequelize.STRING,
    },

    twilio_sid: {
        type: Sequelize.STRING,
    },

    twilio_token: {
        type: Sequelize.STRING,
    },

    twilio_number: {
        type: Sequelize.STRING,
    },

    fb_client_id: {
        type: Sequelize.STRING,
    },

    fb_client_secret: {
        type: Sequelize.STRING,
    },

    fb_redirect: {
        type: Sequelize.STRING,
    },

    google_client_id: {
        type: Sequelize.STRING,
    },

    google_client_secret: {
        type: Sequelize.STRING,
    },

    google_redirect: {
        type: Sequelize.STRING,
    },

    facebook: {
        type: Sequelize.STRING,
    },

    instagram: {
        type: Sequelize.STRING,
    },

    pinterest: {
        type: Sequelize.STRING,
    },

    vimeo: {
        type: Sequelize.STRING,
    },

    youtube: {
        type: Sequelize.STRING,
    },

    is_sociallogin: {
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

module.exports = Settings;