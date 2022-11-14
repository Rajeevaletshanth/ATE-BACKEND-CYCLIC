require('dotenv').config();
const logger = require('../config/logger');
const Category = require('../models/category');

module.exports = {


    create: async (req, res) => {

        const name = req.body.name;
        const restaurant_id = req.body.restaurant_id;
        const description = req.body.description;
        const category_avatar = req.body.category_avatar;

        try {

            const newcategory = new Category({
                name: name,
                restaurant_id: restaurant_id,
                description: description,
                category_avatar: category_avatar
            })
            await newcategory.save();

            if (newcategory) {
                res.send({ "response": "success", "message": "Category added Successfully." })
            } else {
                res.send({ "response": "error", "message": "Sorry, failed to save!" })
            }

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured! $" });
        }

    },

    getAll: async (req, res) => {

        try {
            const category = await Category.findAll()
            if (category.length > 0) {
                res.send({ "response": "success", category })
            } else {
                res.send({ "response": "error", "message": "category doesn't exist" })
            }
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const category = await category.findAll({
                where: {
                    id: id
                }
            })
            if (category.length > 0)
                res.send({ "response": "success", category })
            else
                res.send({ "response": "error", "message": "category doesn't exist" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const category = await category.destroy({
                where: {
                    id: id
                }
            })
            if (category > 0)
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
        const restaurant_id = req.body.restaurant_id;
        const description = req.body.description;
        const category_avatar = req.body.category_avatar;

        try {
            const category = await Category.update({
                name: name,
                restaurant_id: restaurant_id,
                description: description,
                category_avatar: category_avatar
            },
                {
                    where: {
                        id: id
                    }
                })
            if (category[0] > 0)
                res.send({ "response": "success", "message": "Successfully updated." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to update!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Sorry, User is deleted or suspended!" })
        }
    },


}