require('dotenv').config();
const logger = require('../config/logger');
const Addons = require('../models/addons');

module.exports = {


    create: async (req, res) => {
        
        const name = req.body.name;
        const product_id = req.body.product_id;
        const price = req.body.price;
        const addons_avatar = req.body.addons_avatar;

        try{

            const newAddons = new Addons({
                name: name,
                product_id: product_id,
                price: price,
                addons_avatar: addons_avatar
            })
            await newAddons.save();

            if(newAddons){
                res.send({"response": "success", "message" : "Addons add Successfully."})
            }else{
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})
            }

        }catch(error){
            res.send({"response": "error", "message" : "Undefined error occured! $"});
        }

    },

    getAll: async (req, res) => {

        try{
            const addons = await Addons.findAll()
            if(addons.length > 0){
                res.send({"response": "success", addons})
            }else{
                res.send({"response": "error", "message" : "addons doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const addons = await Addons.findAll({
                where: {
                    id: id
                }
            })
            if(addons.length > 0)
                res.send({"response": "success", addons})
            else
                res.send({"response": "error", "message" : "addons doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const addons = await Addons.destroy({
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

        const name = req.body.name;
        const product_id = req.body.product_id;
        const price = req.body.price;
        const addons_avatar = req.body.addons_avatar;

        try {
            const addons = await Addons.update({
                name: name,
                product_id: product_id,
                price: price,
                addons_avatar: addons_avatar
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