require('dotenv').config();
const { Op } = require("sequelize");
const logger = require('../config/logger');
const Order = require('../models/order');
const Product = require('../models/product')
const Kitchen = require('../models/kitchen')

const getProductDets = async(id) => {
    await Product.findOne({
        where:{
            product_id: id
        }
    }).then((resp) => {
        return resp   
    }).catch((err)=>{
        return []
    })
}

const getKitchenDets = async(id) => {
    await Kitchen.findOne({
        where:{
            product_id: id
        }
    }).then((resp) => {
        return resp   
    }).catch((err)=>{
        return []
    })
}

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

            const order = await Order.findOne({
                where: {
                    id: id
                }
            })
            if(order !== null){
                // const productArr = order.map(({product_id: id}) => ({id}))
                // const kitchenArr = order.map(({restaurant_id: id}) => ({id}))

                const product_dets = getProductDets(order.product_id);
                const kitchen_dets = getKitchenDets(order.restaurant_id);

                res.send({"response": "success", data: {order_dets: order, product_dets:product_dets, kitchen_dets:kitchen_dets}})     
            }else
                res.send({"response": "error", "message" : "Order doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : error.message});
        }
    },

    getOrdersByUserId: async (req, res) => {
        const user_id = req.params.user_id
        try {
            const order = await Order.findAll({
                where: {
                    user_id: user_id
                }
            })
            if(order.length > 0)
                res.send({"response": "success", orders: order})
            else
                res.send({"response": "error", "message" : "Order doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : error.message});
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