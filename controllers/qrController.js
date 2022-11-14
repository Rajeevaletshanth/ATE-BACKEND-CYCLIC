require('dotenv').config();
const logger = require('../config/logger');
const QrCode = require('../models/qrCode');

module.exports = {

    create: async (req, res) => {

        const name = req.body.name;
        const table_no = req.body.table_no;
        const qr_image = req.body.qr_image;

        try {

            const newQrCode = new QrCode({
                name: name,
                table_no: table_no,
                qr_image: qr_image
            })
            await newQrCode.save();

            if (newQrCode) {
                res.send({ "response": "success", "message": "QR Code added Successfully." })
            } else {
                res.send({ "response": "error", "message": "Sorry, failed to save!" })
            }

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured! $" });
        }

    },

    getAll: async (req, res) => {

        try {
            const qrCode = await QrCode.findAll()
            if (qrCode.length > 0) {
                res.send({ "response": "success", qrCode })
            } else {
                res.send({ "response": "error", "message": "QR Code doesn't exist" })
            }
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const qrCode = await QrCode.findAll({
                where: {
                    id: id
                }
            })
            if (qrCode.length > 0)
                res.send({ "response": "success", qrCode})
            else
                res.send({ "response": "error", "message": "QR Code doesn't exist" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const qrCode = await QrCode.destroy({
                where: {
                    id: id
                }
            })
            if (qrCode > 0)
                res.send({ "response": "success", "message": "Successfully deleted." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to delete!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    edit: async (req, res) => {
        const { id } = req.params;

        const name = req.body.name;
        const table_no = req.body.table_no;
        const qr_image = req.body.qr_image;

        try {
            const qrCode = await QrCode.update({
                name: name,
                table_no: table_no,
                qr_image: qr_image
            },
                {
                    where: {
                        id: id
                    }
                })
            if (qrCode[0] > 0)
                res.send({ "response": "success", "message": "Successfully updated." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to update!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Sorry, User is deleted or suspended!" })
        }
    },


}