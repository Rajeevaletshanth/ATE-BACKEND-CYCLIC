require('dotenv').config();
const logger = require('../config/logger');
const ComboMenu = require('../models/comboMenu');

module.exports = {


    create: async (req, res) => {

        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const max_quantity = req.body.max_quantity;
        const is_availability = req.body.is_availability;
        const menu_avatar = req.body.menu_avatar;

        try {

            const newComboMenu = new ComboMenu({
                name: name,
                description: description,
                price: price,
                max_quantity: max_quantity,
                is_availability: is_availability,
                menu_avatar: menu_avatar,
            })
            await newComboMenu.save();

            if (newComboMenu) {
                res.send({ "response": "success", "message": "ComboMenu added Successfully." })
            } else {
                res.send({ "response": "error", "message": "Sorry, failed to save!" })
            }

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured! $" });
        }

    },

    getAll: async (req, res) => {

        try {
            const comboMenu = await ComboMenu.findAll()
            if (comboMenu.length > 0) {
                res.send({ "response": "success", comboMenu })
            } else {
                res.send({ "response": "error", "message": "ComboMenu doesn't exist" })
            }
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const comboMenu = await ComboMenu.findAll({
                where: {
                    id: id
                }
            })
            if (comboMenu.length > 0)
                res.send({ "response": "success", comboMenu })
            else
                res.send({ "response": "error", "message": "category doesn't exist" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const comboMenu = await ComboMenu.destroy({
                where: {
                    id: id
                }
            })
            if (comboMenu > 0)
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
        const description = req.body.description;
        const price = req.body.price;
        const max_quantity = req.body.max_quantity;
        const is_availability = req.body.is_availability;
        const menu_avatar = req.body.menu_avatar;

        try {
            const comboMenu = await ComboMenu.update({
                name: name,
                description: description,
                price: price,
                max_quantity: max_quantity,
                is_availability: is_availability,
                menu_avatar: menu_avatar,
            },
                {
                    where: {
                        id: id
                    }
                })
            if (comboMenu[0] > 0)
                res.send({ "response": "success", "message": "Successfully updated." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to update!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Sorry, User is deleted or suspended!" })
        }
    },


}