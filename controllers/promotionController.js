require('dotenv').config();
const logger = require('../config/logger');
const Promotion = require('../models/promotion');

module.exports = {


    create: async (req, res) => {
        
        const promotion_name = req.body.promotion_name;
        const product_id = req.body.product_id;
        const product_name = req.body.product_name;
        const discount = req.body.discount;
        const quantity = req.body.quantity;
        const vaild_date = req.body.vaild_date;
        const description = req.body.description;
        const promotion_avater = req.body.promotion_avater;

        try{

            const newPromotion = new Promotion({
                promotion_name: promotion_name,
                product_id: product_id,
                product_name: product_name,
                discount: discount,
                quantity: quantity,
                vaild_date: vaild_date,
                description: description,
                promotion_avater: promotion_avater
            })
            await newPromotion.save();

            if(newPromotion){
                res.send({"response": "success", "message" : "Promotion add Successfully."})
            }else{
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})
            }

        }catch(error){
            res.send({"response": "error", "message" : "Undefined error occured! $"});
        }

    },

    getAll: async (req, res) => {

        try{
            const promotion = await Promotion.findAll()
            if(promotion.length > 0){
                res.send({"response": "success", promotion})
            }else{
                res.send({"response": "error", "message" : "promotion doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const promotion = await Promotion.findAll({
                where: {
                    id: id
                }
            })
            if(promotion.length > 0)
                res.send({"response": "success", promotion})
            else
                res.send({"response": "error", "message" : "promotion doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const promotion = await Promotion.destroy({
                where: {
                    id: id
                }
            })
            if(promotion > 0)
                res.send({"response": "success", "message" : "Successfully deleted."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to delete!"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});                     
        }
    },

    edit : async(req, res) => {
        const  { id } = req.params;

        const promotion_name = req.body.promotion_name;
        const product_id = req.body.product_id;
        const product_name = req.body.product_name;
        const discount = req.body.discount;
        const quantity = req.body.quantity;
        const vaild_date = req.body.vaild_date;
        const description = req.body.description;
        const promotion_avater = req.body.promotion_avater;

        try {
            const promotion = await Promotion.update({
                promotion_name: promotion_name,
                product_id: product_id,
                product_name: product_name,
                discount: discount,
                quantity: quantity,
                vaild_date: vaild_date,
                description: description,
                promotion_avater: promotion_avater
            },
            {
                where: {
                    id: id
                }
            })
            if(promotion[0] > 0)
                res.send({"response": "success", "message" : "Successfully updated."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to update!"})
        } catch(error) {
            res.send({"response" : "error", "message" : "Sorry, User is deleted or suspended!"})                     
        }         
    },


}