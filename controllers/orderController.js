require('dotenv').config();
const { Op } = require("sequelize");
const logger = require('../config/logger');
const Order = require('../models/order');
const Product = require('../models/product');
const Addons = require('../models/addons');

const getProducts = async(productArr) => {
    try {
        await Product.findAll({
            where:{
                [Op.or] : productArr
            }
        }).then((resp) => {
            if(resp.length > 0){
                return resp
            }else{
                return []
            }
        }) 
    } catch (error) {
        return [];
    }
    
}

const getAddons = () => {

}

module.exports = {
    create: async (req, res) => {
        
        const user_id = req.body.user_id;
        const products = JSON.stringify(req.body.products);
        const order_date = req.body.order_date;
        const order_time = req.body.order_time;
        const delivery_fee = req.body.delivery_fee;
        const total_amount = req.body.total_amount;
        const status = req.body.status;

        try{

            const newOrder = new Order({
                user_id: user_id,
                products:products,
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

    edit: async (req, res) => {
        const { id } = req.params;
        const status = req.body.status;

        try {
            const order = await Order.update({
                status: status
            },
                {
                    where: {
                        id: id
                    }
                })
            if (order[0] > 0)
                res.send({ "response": "success", data: `Status updated to ${status}` })
            else
                res.send({ response: "error", "message": "Order not found!" })
        } catch (error) {
            res.send({ response: "error", message: error.message })
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
                if(order.products !== null){
                    const order_dets = JSON.parse(order.products);
                    const productArr = order_dets.map(({product_id: id}) => ({id}))

                    await Product.findAll({
                        where:{
                            [Op.or] : productArr
                        }
                    }).then((resp) => {
                        if(resp.length > 0){
                            let items = [];
                            resp.map((item, key) => {
                                let quantity = order_dets[key].quantity
                                let addons = order_dets[key].addons
                                items[key] = {
                                        product_det : resp[key],
                                        quantity : quantity,
                                        addons : addons
                                }
                            })

                            res.send({response: "success", data: {order_dets: order, items: items} })
                        }else{
                            res.send({response: "success", data: {order_dets: order, product_dets: []} })
                        }
                    }).catch((err) => {
                        res.send({"response": "error", "message" : err.message})
                    })
      
                }else{
                    res.send({"response": "error", "message" : "Products empty"})
                }    
            }else
                res.send({"response": "error", "message" : "Order doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : error.message});
        }
    },

    getOrdersByUserId: async (req, res) => {
        const {user_id} = req.params
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
            console.log("sds")
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
    }


}