require('dotenv').config();
const logger = require('../config/logger');
const Settings = require('../models/settings');

module.exports = {

    create: async (req, res) => {

        const site = req.body.site;
        const logo = req.body.logo;
        const favicon = req.body.favicon;
        const copyright = req.body.copyright;
        const currency = req.body.currency;
        const currencycode = req.body.currencycode;
        const twilotoken = req.body.twilotoken;
        const twilionumber = req.body.twilionumber;
        const pub_pub_key = req.body.pub_sub_key;
        const pub_sub_key = req.body.pub_sub_key;
        const client_id = req.body.client_id;
        const client_secret = req.body.client_secret;
        const default_language = req.body.default_language;
        const customer_username = req.body.customer_username;
        const terms_user = req.body.terms_user;
        const terms_restaurants = req.body.terms_restaurants;
        const default_location = req.body.default_location;
        const amount_referral = req.body.amount_referral;
        const payment = req.body.payment;
        const stripe_charge = req.body.stripe_charge;
        const stripe_publish_key = req.body.stripe_publish_key;
        const stripe_secret = req.body.stripe_secret;
        const stripe_url = req.body.stripe_url;
        const productOrder = req.body.productOrder;
        const dispute_responsetime = req.body.dispute_responsetime;
        const search_distance = req.body.search_distance;
        const deliveryman_responsetime = req.body.deliveryman_responsetime;
        const dish_commission = req.body.dish_commission;
        const delivery_fee = req.body.delivery_fee;
        const orderlimit_min = req.body.orderlimit_min;
        const orderlimit_max = req.body.orderlimit_max;
        const order_assinged = req.body.order_assinged;
        const android_env = req.body.android_env;
        const android_pushkey = req.body.android_pushkey;
        const ios_user_env = req.body.ios_user_env;
        const ios_provider_env = req.body.ios_provider_env;
        const android_applink = req.body.android_applink;
        const os_applink = req.body.os_applink;
        const iosprovider_pushpassword = req.body.iosprovider_pushpassword;
        const iosshop_env = req.body.iosshop_env;
        const iosshop_pushpassword = req.body.iosshop_pushpassword;
        const iosuser_pushpassword = req.body.iosuser_pushpassword
        const iosuser_topic = req.body.iosuser_topic;
        const iosuser_apppassword = req.body.iosuser_apppassword;
        const iosprovider_apptopic = req.body.iosprovider_apptopic;
        const iosprovider_apppassword = req.body.iosprovider_apppassword;
        const iosshop_apptopic = req.body.iosshop_apptopic;
        const iosshop_apppassword = req.body.iosshop_apppassword;
        const googlemap_key = req.body.googlemap_key;
        const twilio_sid = req.body.twilio_sid;
        const twilio_token = req.body.twilio_token;
        const twilio_number = req.body.twilio_number;
        const fb_client_id = req.body.fb_client_id;
        const fb_client_secret = req.body.fb_client_secret;
        const fb_redirect = req.body.fb_redirect;
        const google_client_id = req.body.google_client_id;
        const google_client_secret = req.body.google_client_secret;
        const google_redirect = req.body.google_redirect;
        const facebook = req.body.facebook;
        const instagram = req.body.instagram;
        const pinterest = req.body.pinterest;
        const vimeo = req.body.vimeo;
        const youtube = req.body.youtube;
        const is_sociallogin = req.body.is_sociallogin;

        try {

            const newSettings = new Settings({

                site: site,
                logo: logo,
                favicon: favicon,
                copyright: copyright,
                currency: currency,
                currencycode: currencycode,
                twilotoken: twilotoken,
                twilionumber: twilionumber,
                pub_pub_key: pub_pub_key,
                pub_sub_key: pub_sub_key,
                client_id: client_id,
                client_secret: client_secret,
                default_language: default_language,
                customer_username: customer_username,
                terms_user: terms_user,
                terms_restaurants: terms_restaurants,
                default_location: default_location,
                amount_referral: amount_referral,
                payment: payment,
                stripe_charge: stripe_charge,
                stripe_publish_key: stripe_publish_key,
                stripe_secret: stripe_secret,
                stripe_url: stripe_url,
                productOrder: productOrder,
                dispute_responsetime: dispute_responsetime,
                search_distance: search_distance,
                deliveryman_responsetime: deliveryman_responsetime,
                dish_commission: dish_commission,
                delivery_fee: delivery_fee,
                orderlimit_min: orderlimit_min,
                orderlimit_max: orderlimit_max,
                order_assinged: order_assinged,
                android_env: android_env,
                android_pushkey: android_pushkey,
                ios_user_env: ios_user_env,
                ios_provider_env: ios_provider_env,
                android_applink: android_applink,
                os_applink: os_applink,
                iosprovider_pushpassword: iosprovider_pushpassword,
                iosshop_env: iosprovider_pushpassword,
                iosshop_pushpassword: iosprovider_pushpassword,
                iosuser_pushpassword: iosuser_pushpassword,
                iosuser_topic: iosuser_topic,
                iosuser_apppassword: iosuser_apppassword,
                iosprovider_apptopic: iosprovider_apptopic,
                iosprovider_apppassword: iosprovider_apppassword,
                iosshop_apptopic: iosshop_apptopic,
                iosshop_apppassword: iosshop_apppassword,
                googlemap_key: googlemap_key,
                twilio_sid: twilio_sid,
                twilio_token: twilio_token,
                twilio_number: twilio_number,
                fb_client_id: fb_client_id,
                fb_client_secret: fb_client_secret,
                fb_redirect: fb_redirect,
                google_client_id: google_client_id,
                google_client_secret: google_client_secret,
                google_redirect: google_redirect,
                facebook: facebook,
                instagram: instagram,
                pinterest: pinterest,
                vimeo: vimeo,
                youtube: youtube,
                is_sociallogin: is_sociallogin
            })
            await newSettings.save()

            if (newSettings)
                res.send({ "response": "success", "message": "Settings add Successfully." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to save!" })

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    getAll: async (req, res) => {
        try {
            const settings = await Settings.findAll()
            if (settings.length > 0) {
                res.send({ "response": "success", settings })
            } else {
                res.send({ "response": "error", "message": "Settings doesn't exist" })
            }
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const settings = await Settings.findAll({
                where: {
                    id: id
                }
            })
            if (settings.length > 0)
                res.send({ "response": "success", settings })
            else
                res.send({ "response": "error", "message": "Settings doesn't exist" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const settings = await Settings.destroy({
                where: {
                    id: id
                }
            })
            if (cuisines > 0)
                res.send({ "response": "success", "message": "Successfully deleted." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to delete!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    edit: async (req, res) => {
        
        const site = req.body.site;
        const logo = req.body.logo;
        const favicon = req.body.favicon;
        const copyright = req.body.copyright;
        const currency = req.body.currency;
        const currencycode = req.body.currencycode;
        const twilotoken = req.body.twilotoken;
        const twilionumber = req.body.twilionumber;
        const pub_pub_key = req.body.pub_sub_key;
        const pub_sub_key = req.body.pub_sub_key;
        const client_id = req.body.client_id;
        const client_secret = req.body.client_secret;
        const default_language = req.body.default_language;
        const customer_username = req.body.customer_username;
        const terms_user = req.body.terms_user;
        const terms_restaurants = req.body.terms_restaurants;
        const default_location = req.body.default_location;
        const amount_referral = req.body.amount_referral;
        const payment = req.body.payment;
        const stripe_charge = req.body.stripe_charge;
        const stripe_publish_key = req.body.stripe_publish_key;
        const stripe_secret = req.body.stripe_secret;
        const stripe_url = req.body.stripe_url;
        const productOrder = req.body.productOrder;
        const dispute_responsetime = req.body.dispute_responsetime;
        const search_distance = req.body.search_distance;
        const deliveryman_responsetime = req.body.deliveryman_responsetime;
        const dish_commission = req.body.dish_commission;
        const delivery_fee = req.body.delivery_fee;
        const orderlimit_min = req.body.orderlimit_min;
        const orderlimit_max = req.body.orderlimit_max;
        const order_assinged = req.body.order_assinged;
        const android_env = req.body.android_env;
        const android_pushkey = req.body.android_pushkey;
        const ios_user_env = req.body.ios_user_env;
        const ios_provider_env = req.body.ios_provider_env;
        const android_applink = req.body.android_applink;
        const os_applink = req.body.os_applink;
        const iosprovider_pushpassword = req.body.iosprovider_pushpassword;
        const iosshop_env = req.body.iosshop_env;
        const iosshop_pushpassword = req.body.iosshop_pushpassword;
        const iosuser_pushpassword = req.body.iosuser_pushpassword
        const iosuser_topic = req.body.iosuser_topic;
        const iosuser_apppassword = req.body.iosuser_apppassword;
        const iosprovider_apptopic = req.body.iosprovider_apptopic;
        const iosprovider_apppassword = req.body.iosprovider_apppassword;
        const iosshop_apptopic = req.body.iosshop_apptopic;
        const iosshop_apppassword = req.body.iosshop_apppassword;
        const googlemap_key = req.body.googlemap_key;
        const twilio_sid = req.body.twilio_sid;
        const twilio_token = req.body.twilio_token;
        const twilio_number = req.body.twilio_number;
        const fb_client_id = req.body.fb_client_id;
        const fb_client_secret = req.body.fb_client_secret;
        const fb_redirect = req.body.fb_redirect;
        const google_client_id = req.body.google_client_id;
        const google_client_secret = req.body.google_client_secret;
        const google_redirect = req.body.google_redirect;
        const facebook = req.body.facebook;
        const instagram = req.body.instagram;
        const pinterest = req.body.pinterest;
        const vimeo = req.body.vimeo;
        const youtube = req.body.youtube;
        const is_sociallogin = req.body.is_sociallogin;

        try {
            const settings = await Settings.update({
                site: site,
                logo: logo,
                favicon: favicon,
                copyright: copyright,
                currency: currency,
                currencycode: currencycode,
                twilotoken: twilotoken,
                twilionumber: twilionumber,
                pub_pub_key: pub_pub_key,
                pub_sub_key: pub_sub_key,
                client_id: client_id,
                client_secret: client_secret,
                default_language: default_language,
                customer_username: customer_username,
                terms_user: terms_user,
                terms_restaurants: terms_restaurants,
                default_location: default_location,
                amount_referral: amount_referral,
                payment: payment,
                stripe_charge: stripe_charge,
                stripe_publish_key: stripe_publish_key,
                stripe_secret: stripe_secret,
                stripe_url: stripe_url,
                productOrder: productOrder,
                dispute_responsetime: dispute_responsetime,
                search_distance: search_distance,
                deliveryman_responsetime: deliveryman_responsetime,
                dish_commission: dish_commission,
                delivery_fee: delivery_fee,
                orderlimit_min: orderlimit_min,
                orderlimit_max: orderlimit_max,
                order_assinged: order_assinged,
                android_env: android_env,
                android_pushkey: android_pushkey,
                ios_user_env: ios_user_env,
                ios_provider_env: ios_provider_env,
                android_applink: android_applink,
                os_applink: os_applink,
                iosprovider_pushpassword: iosprovider_pushpassword,
                iosshop_env: iosprovider_pushpassword,
                iosshop_pushpassword: iosprovider_pushpassword,
                iosuser_pushpassword: iosuser_pushpassword,
                iosuser_topic: iosuser_topic,
                iosuser_apppassword: iosuser_apppassword,
                iosprovider_apptopic: iosprovider_apptopic,
                iosprovider_apppassword: iosprovider_apppassword,
                iosshop_apptopic: iosshop_apptopic,
                iosshop_apppassword: iosshop_apppassword,
                googlemap_key: googlemap_key,
                twilio_sid: twilio_sid,
                twilio_token: twilio_token,
                twilio_number: twilio_number,
                fb_client_id: fb_client_id,
                fb_client_secret: fb_client_secret,
                fb_redirect: fb_redirect,
                google_client_id: google_client_id,
                google_client_secret: google_client_secret,
                google_redirect: google_redirect,
                facebook: facebook,
                instagram: instagram,
                pinterest: pinterest,
                vimeo: vimeo,
                youtube: youtube,
                is_sociallogin: is_sociallogin
            },
                {
                    where: {
                        id: id
                    }
                })
            if (settings[0] > 0)
                res.send({ "response": "success", "message": "Successfully updated." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to update!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Sorry, User is deleted or suspended!" })
        }
    },
}