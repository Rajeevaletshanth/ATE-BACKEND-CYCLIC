require('dotenv').config();
const logger = require('../config/logger');
const Restaurant = require('../models/restaurant');

module.exports = {

    create: async (req, res) => {
        
        const name = req.body.name;
        const restaurant_avatar = req.body.name;

        try{

            const newRestaurant = new Restaurant({
                name: name,
                restaurant_avatar: restaurant_avatar
                
            })
            await newRestaurant.save();

            if(newRestaurant){
                res.send({"response": "success", "message" : "Restaurant added Successfully."})
            }else{
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})
            }

        }catch(error){
            res.send({"response": "error", "message" : "Undefined error occured! $"});
        }

    },

    getAll: async (req, res) => {

        try{

            const restaurant = await Restaurant.findAll()

            if(restaurant.length > 0){
                res.send({"response": "success", restaurant})
            }else{
                res.send({"response": "error", "message" : "Restaurant doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id

        try {
            const restaurant = await Restaurant.findAll({
                where: {
                    id: id
                }
            })
            if(restaurant.length > 0)
                res.send({"response": "success", restaurant})
            else
                res.send({"response": "error", "message" : "Restaurant doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const restaurant = await Restaurant.destroy({
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
        const restaurant_avatar = req.body.name;

        try {
            const restaurant = await Restaurant.update({
                name: name,
                restaurant_avatar: restaurant_avatar
            },
            {
                where: {
                    id: id
                }
            })
            if(restaurant[0] > 0)
                res.send({"response": "success", "message" : "Successfully updated."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to update!"})
        } catch(error) {
            res.send({"response" : "error", "message" : "Sorry, User is deleted or suspended!"})                     
        }         
    },


}