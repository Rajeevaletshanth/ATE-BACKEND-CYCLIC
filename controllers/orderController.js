require('dotenv').config();
const logger = require('../config/logger');
const Order = require('../models/order');

module.exports = {


    create: async (req, res) => {
        
        const user_id = req.body.user_id;
        const restaurant_id = req.body.restaurant_id;
        const product_id = req.body.product_id;
        const quantity = req.body.quantity;
        const price = req.body.price;
        const order_date = req.body.order_date;
        const order_time = req.body.order_time;
        const delivery_fee = req.body.delivery_fee;
        const total_amount = req.body.total_amount;
        const status = req.body.status;

        try{

            const newOrder = new Order({
                user_id: user_id,
                restaurant_id: restaurant_id,
                product_id: product_id,
                quantity: quantity,
                price: price,
                order_date: order_date,
                order_time: order_time,
                delivery_fee: delivery_fee,
                total_amount: total_amount,
                status: status
            })
            await newOrder.save();

            if(newOrder){
                res.send({"response": "success", "message" : "Order add Successfully."})
            }else{
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})
            }

        }catch(error){
            res.send({"response": "error", "message" : "Undefined error occured! $"});
        }

    },

    getAll: async (req, res) => {

        try{
            const order = await Order.findAll()
            if(order.length > 0){
                res.send({"response": "success", order})
            }else{
                res.send({"response": "error", "message" : "order doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const order = await Order.findAll({
                where: {
                    id: id
                }
            })
            if(order.length > 0)
                res.send({"response": "success", order})
            else
                res.send({"response": "error", "message" : "order doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    //Get BY Order with USER ID
    getByOrderid: async (req, res) => {
        const id = req.params.id
        try {
            const order = await Order.findAll({
                where: {
                    id: user_id
                }
            })
            if(order.length > 0)
                res.send({"response": "success", order})
            else
                res.send({"response": "error", "message" : "order doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const order = await Order.destroy({
                where: {
                    id: id
                }
            })
            if(order > 0)
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
        const quantity = req.body.quantity;
        const price = req.body.price;
        const order_date = req.body.order_date;
        const order_time = req.body.order_time;
        const delivery_fee = req.body.delivery_fee;
        const total_amount = req.body.total_amount;
        const status = req.body.status;

        try {
            const order = await Order.update({
                user_id: user_id,
                restaurant_id: restaurant_id,
                product_id: product_id,
                quantity: quantity,
                price: price,
                order_date: order_date,
                order_time: order_time,
                delivery_fee: delivery_fee,
                total_amount: total_amount,
                status: status
            },
            {
                where: {
                    id: id
                }
            })
            if(addons[0] > 0)
                res.send({"response": "success", "message" : "Successfully updated."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to update!"})
        } catch(error) {
            res.send({"response" : "error", "message" : "Sorry, User is deleted or suspended!"})                     
        }         
    },


}