require('dotenv').config();
const logger = require('../config/logger');
const NoticePushNotification = require('../models/noticePushNotification');

module.exports = {

    create: async (req, res) => {

        const sent_to_type = req.body.sent_to_type;
        const message = req.body.message;
        const push_type = req.body.push_type;
        const send_date = req.body.send_date;
        const send_time = req.body.send_time;
        const sent_status = req.body.sent_status;
        const sent_on = req.body.sent_on;

        try {

            const newNoticePushNotification = new NoticePushNotification({
                sent_to_type: sent_to_type,
                message: message,
                push_type: push_type,
                send_date: send_date,
                send_time: send_time,
                sent_status: sent_status,
                sent_on: sent_on
            })
            await newNoticePushNotification.save()

            if (newNoticePushNotification)
                res.send({ "response": "success", "message": "Notice Push Notification add Successfully." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to save!" })

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    getAll: async (req, res) => {
        try {
            const noticePushNotification = await NoticePushNotification.findAll()
            if (noticePushNotification.length > 0) {
                res.send({ "response": "success", notice })
            } else {
                res.send({ "response": "error", "message": "Notice Push Notification doesn't exist" })
            }
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const noticePushNotification = await NoticePushNotification.findAll({
                where: {
                    id: id
                }
            })
            if (currency.length > 0)
                res.send({ "response": "success", noticePushNotification })
            else
                res.send({ "response": "error", "message": "Notice Push Notification doesn't exist" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const noticePushNotification = await NoticePushNotification.destroy({
                where: {
                    id: id
                }
            })
            if (noticePushNotification > 0)
                res.send({ "response": "success", "message": "Successfully deleted." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to delete!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    edit: async (req, res) => {
        const { id } = req.params;

        const sent_to_type = req.body.sent_to_type;
        const message = req.body.message;
        const push_type = req.body.push_type;
        const send_date = req.body.send_date;
        const send_time = req.body.send_time;
        const sent_status = req.body.sent_status;
        const sent_on = req.body.sent_on;


        try {
            const noticePushNotification = await NoticePushNotification.update({
                sent_to_type: sent_to_type,
                message: message,
                push_type: push_type,
                send_date: send_date,
                send_time: send_time,
                sent_status: sent_status,
                sent_on: sent_on
            },
                {
                    where: {
                        id: id
                    }
                })
            if (noticePushNotification[0] > 0)
                res.send({ "response": "success", "message": "Successfully updated." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to update!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Sorry, User is deleted or suspended!" })
        }
    },
}