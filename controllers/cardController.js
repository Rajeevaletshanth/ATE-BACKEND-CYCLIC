require('dotenv').config();
const logger = require('../config/logger');
const Card = require('../models/card');

module.exports = {


    create: async (req, res) => {
        
        const user_id = req.body.user_id;
        const product_id = req.body.product_id;
        const product_name = req.body.product_name;
        const quantity = req.body.quantity;
        const price = req.body.price;
        const note = req.body.note;
        const card_draft = req.body.card_draft;

        try{

            const newCards = new Card({
                user_id: user_id,
                product_id: product_id,
                product_name: product_name,
                quantity: quantity,
                price: price,
                note: note,
                card_draft: card_draft
            })
            await newCards.save();

            if(newCards){
                res.send({"response": "success", "message" : "Card add Successfully."})
            }else{
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})
            }

        }catch(error){
            res.send({"response": "error", "message" : "Undefined error occured! $"});
        }

    },

    /*getAll: async (req, res) => {

        try{
            const cards = await Card.findAll()
            if(cards.length > 0){
                res.send({"response": "success", cards})
            }else{
                res.send({"response": "error", "message" : "cards doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },*/

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const cards = await Card.findAll({
                where: {
                    user_id: id
                }
            })
            if(cards.length > 0)
                res.send({"response": "success", cards})
            else
                res.send({"response": "error", "message" : "cards doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const cards = await Card.destroy({
                where: {
                    id: id
                }
            })
            if(addons > 0)
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
        const product_id = req.body.product_id;
        const product_name = req.body.product_name;
        const quantity = req.body.quantity;
        const price = req.body.price;
        const note = req.body.note;
        const card_draft = req.body.card_draft;

        try {
            const cards = await Card.update({
                user_id: user_id,
                product_id: product_id,
                product_name: product_name,
                quantity: quantity,
                price: price,
                note: note,
                card_draft: card_draft
            },
            {
                where: {
                    id: id
                }
            })
            if(cards[0] > 0)
                res.send({"response": "success", "message" : "Successfully updated."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to update!"})
        } catch(error) {
            res.send({"response" : "error", "message" : "Sorry, User is deleted or suspended!"})                     
        }         
    },


}