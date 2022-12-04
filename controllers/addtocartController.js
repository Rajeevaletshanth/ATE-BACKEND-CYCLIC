require('dotenv').config();
const logger = require('../config/logger');
const AddToCart = require('../models/addtocart');

module.exports = {


    create: async (req, res) => {

        const user_id = req.body.user_id;
        const restaurant_id = req.body.restaurant_id;
        const product_id = req.body.product_id;
        const addons = JSON.stringify(req.body.addons);
        const qty = req.body.qty;
        const status = req.body.status;

        try{

            const newAddtoCart = new AddToCart({
                user_id: user_id,
                restaurant_id: restaurant_id,
                product_id: product_id,
                addons: addons,
                qty: qty,
                status: status
            })
            await newAddtoCart.save();

            if(newAddtoCart){
                res.send({"response": "success", "message" : "Product add to cart"})
            }else{
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})
            }

        }catch(error){
            res.send({"response": "error", "message" : "Undefined error occured! $"});
        }

    },

    getAll: async (req, res) => {

        try{
            const addtocart = await AddToCart.findAll()
            if(addtocart.length > 0){
                res.send({"response": "success", addtocart})
            }else{
                res.send({"response": "error", "message" : "Cart doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const addtocart = await AddToCart.findAll({
                where: {
                    user_id: id
                }
            })
            if(addtocart.length > 0)
                res.send({"response": "success", addtocart})
            else
                res.send({"response": "error", "message" : "Cart doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const addtocart = await AddToCart.destroy({
                where: {
                    id: id
                }
            })
            if(addtocart > 0)
                res.send({"response": "success", "message" : "Successfully deleted."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to delete!"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});                     
        }
    },

    edit : async(req, res) => {
        const  { id } = req.params;

        const user_id = req.body.user_id;
        const restaurant_id = req.body.restaurant_id;
        const product_id = req.body.product_id;
        const addons = JSON.stringify(req.body.addons);
        const qty = req.body.qty;
        const status = req.body.status;

        try {
            const addtocart = await AddToCart.update({
                user_id: user_id,
                restaurant_id: restaurant_id,
                product_id: product_id,
                addons: addons,
                qty: qty,
                status: status
            },
            {
                where: {
                    id: id
                }
            })
            if(addtocart[0] > 0)
                res.send({"response": "success", "message" : "Product add to cart updated."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to update!"})
        } catch(error) {
            res.send({"response" : "error", "message" : "Sorry, User is deleted or suspended!"})                     
        }         
    },


}