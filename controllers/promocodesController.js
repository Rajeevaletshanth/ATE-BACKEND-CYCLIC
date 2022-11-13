require('dotenv').config();
const logger = require('../config/logger');
const PromoCodes = require('../models/promoCodes');

module.exports = {

    create: async (req, res) => {

        const promocodes = req.body.promocodes;
        const discount = req.body.discount;
        const usagelimit_percoupon = req.body.usagelimit_percoupon;
        const usagelimit_peruser = req.body.usagelimit_peruser;
        const type = req.body.type;
        const promocodetype = req.body.promocodetype;
        const avaiable_from = req.body.avaiable_from;
        const expired_date = req.body.expired_date;

        try {

            const newPromocode = new PromoCodes({
                promocodes: promocodes,
                discount: discount,
                usagelimit_percoupon: usagelimit_percoupon,
                usagelimit_peruser: usagelimit_peruser,
                type: type,
                promocodetype: promocodetype,
                avaiable_from: avaiable_from,
                expired_date: expired_date
            })
            await newPromocode.save()

            if (newPromocode)
                res.send({ "response": "success", "message": "PromoCodes add Successfully." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to save!" })

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    getAll: async (req, res) => {
        try {
            const promocode = await PromoCodes.findAll()
            if (promocode.length > 0) {
                res.send({ "response": "success", promocode })
            } else {
                res.send({ "response": "error", "message": "PromoCode doesn't exist" })
            }
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const promocode = await PromoCodes.findAll({
                where: {
                    id: id
                }
            })
            if (promocode.length > 0)
                res.send({ "response": "success", promocode })
            else
                res.send({ "response": "error", "message": "PromoCodes doesn't exist" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const promocode = await PromoCodes.destroy({
                where: {
                    id: id
                }
            })
            if (promocode > 0)
                res.send({ "response": "success", "message": "Successfully deleted." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to delete!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    edit: async (req, res) => {
        const { id } = req.params;

        const promocodes = req.body.promocodes;
        const discount = req.body.discount;
        const usagelimit_percoupon = req.body.usagelimit_percoupon;
        const usagelimit_peruser = req.body.usagelimit_peruser;
        const type = req.body.type;
        const promocodetype = req.body.promocodetype;
        const avaiable_from = req.body.avaiable_from;
        const expired_date = req.body.expired_date;


        try {
            const promocode = await PromoCodes.update({
                promocodes: promocodes,
                discount: discount,
                usagelimit_percoupon: usagelimit_percoupon,
                usagelimit_peruser: usagelimit_peruser,
                type: type,
                promocodetype: promocodetype,
                avaiable_from: avaiable_from,
                expired_date: expired_date
            },
                {
                    where: {
                        id: id
                    }
                })
            if (promocode[0] > 0)
                res.send({ "response": "success", "message": "Successfully updated." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to update!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Sorry, User is deleted or suspended!" })
        }
    },
}