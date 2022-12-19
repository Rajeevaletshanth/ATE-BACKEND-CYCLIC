require('dotenv').config();
const logger = require('../config/logger');
const Product = require('../models/product');
const ComboMenu = require('../models/comboMenu');

module.exports = {


    create: async (req, res) => {

        const name = req.body.name;
        const category_id = req.body.category_id;
        const restaurant_id = req.body.restaurant_id;
        const description = req.body.description;
        const food_type = req.body.food_type;
        const combo_menu_id = req.body.combo_menu_id;
        const is_availability = req.body.is_availability;
        const price = req.body.price;
        const quantity = req.body.quantity;
        const addons = JSON.stringify(req.body.addons);
        const offer = req.body.offer;
        const product_avatar = req.body.product_avatar;

        try {
            const newProduct = new Product({
                name: name,
                category_id: category_id,
                restaurant_id: restaurant_id,
                description: description,
                food_type: food_type,
                combo_menu_id: combo_menu_id,
                is_availability: is_availability,
                price: price,
                quantity: quantity,
                addons: addons,
                offer: offer,
                product_avatar: product_avatar
            })
            await newProduct.save();

            if (newProduct) {
                res.send({ "response": "success", "message": "Product added Successfully." })
            } else {
                res.send({ "response": "error", "message": "Sorry, failed to save!" })
            }

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }

    },

    getAll: async (req, res) => {

        try {
            const product = await Product.findAll()
            if (product.length > 0) {
                res.send({ "response": "success", product })
            } else {
                res.send({ "response": "error", "message": "Product doesn't exist" })
            }
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const product = await Product.findAll({
                where: {
                    id: id
                }
            })
            if (product.length > 0)
                res.send({ "response": "success", product })
            else
                res.send({ "response": "error", "message": "product doesn't exist" })
        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    //get product by category id
    getProductByid: async (req, res) => {
        const id = req.params.id
        try {
            const product = await Product.findAll({
                where: {
                    category_id: id
                }
            })

            if (product.length > 0)
                res.send({ "response": "success", product })
            else
                res.send({ "response": "error", "message": "product doesn't exist" })

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    getProductByKitchen: async (req, res) => {
        const id = req.params.id
        try {
            const product = await Product.findAll({
                where: {
                    restaurant_id: id
                }
            })

            if (product.length > 0)
                res.send({ "response": "success", product })
            else
                res.send({ "response": "error", "message": "product doesn't exist" })

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },


    //ComboMenu
    getComboMenuPack: async (req, res) => {

        const id = req.params.id

        try {

            const product = await Product.findAll({
                where: {
                    combo_menu_id: id
                },
            })

            const combo = await ComboMenu.findAll({
                where: {
                    id: id
                }
            })

            var a = 0;
            var b = 0;
            var price = 0;

            for (var i = 0; i < product.length; i++) {
                a += product[i].price;
                b = combo[0].discount / 100;
                price = a - (a * b);
                console.log(b);
            }



            if (combo.length > 0)
                res.send({ "response": "success", product, price })
            else
                res.send({ "response": "error", "message": "Combo Menu doesn't exist" })

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!", });
        }
    },


    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const product = await Product.destroy({
                where: {
                    id: id
                }
            })
            if (product > 0)
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
        const category_id = req.body.category_id;
        const restaurant_id = req.body.restaurant_id;
        const description = req.body.description;
        const food_type = req.body.food_type;
        const is_availability = req.body.is_availability;
        const price = req.body.price;
        const quantity = req.body.quantity;
        const addons = JSON.stringify(req.body.addons);
        const offer = req.body.offer;
        const product_avatar = req.body.product_avatar;

        try {
            const product = await Product.update({
                name: name,
                category_id: category_id,
                restaurant_id: restaurant_id,
                description: description,
                food_type: food_type,
                is_availability: is_availability,
                price: price,
                quantity: quantity,
                addons: addons,
                offer: offer,
                product_avatar: product_avatar
            },
                {
                    where: {
                        id: id
                    }
                })
            if (product[0] > 0)
                res.send({ "response": "success", "message": "Successfully updated." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to update!" })
        } catch (error) {
            res.send({ "response": "error", "message": "Sorry, User is deleted or suspended!" })
        }
    },


}