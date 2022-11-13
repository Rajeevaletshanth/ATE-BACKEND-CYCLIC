require('dotenv').config();
const logger = require('../config/logger');
const RestaurantsType = require('../models/restaurantsType');

module.exports = {

    create: async (req, res) => {

        const name = req.body.name;
        const status = req.body.status;

        try{

            const newrestaurantsType = new RestaurantsType({
                name: name,
                status: status
            })
            await newrestaurantsType.save()

            if(newrestaurantsType)
                res.send({"response": "success", "message" : "Restaurants Type add Successfully."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})

        } catch (error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    getAll: async (req, res) => {
        try{
            const restaurantsType = await RestaurantsType.findAll()
            if(restaurantsType.length > 0){
                res.send({"response": "success", restaurantsType})
            }else{
                res.send({"response": "error", "message" : "RestaurantsType doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const restaurantsType = await RestaurantsType.findAll({
                where: {
                    id: id
                }
            })
            if(restaurantsType.length > 0)
                res.send({"response": "success", currency})
            else
                res.send({"response": "error", "message" : "Restaurants Type doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const restaurantsType = await RestaurantsType.destroy({
                where: {
                    id: id
                }
            })
            if(restaurantsType > 0)
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
        const status = req.body.status;

        try {
            const restaurantsType = await RestaurantsType.update({
                name: name,
                status: status
            },
            {
                where: {
                    id: id
                }
            })
            if(currency[0] > 0)
                res.send({"response": "success", "message" : "Successfully updated."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to update!"})
        } catch(error) {
            res.send({"response" : "error", "message" : "Sorry, User is deleted or suspended!"})                     
        }         
    },
}