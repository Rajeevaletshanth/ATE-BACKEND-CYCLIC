require('dotenv').config();
const logger = require('../config/logger');
const Cuisines = require('../models/cuisines');

module.exports = {

    create: async (req, res) => {

        const name = req.body.name;
        const image = req.body.image;

        try{

            const newCuisines = new Cuisines({
                name: name,
                image: image,
            })
            await newCuisines.save()

            if(newCuisines)
                res.send({"response": "success", "message" : "Cuisines add Successfully."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})

        } catch (error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    getAll: async (req, res) => {
        try{
            const cuisines = await Cuisines.findAll()
            if(cuisines.length > 0){
                res.send({"response": "success", cuisines})
            }else{
                res.send({"response": "error", "message" : "cuisines doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const cuisines = await Cuisines.findAll({
                where: {
                    id: id
                }
            })
            if(cuisines.length > 0)
                res.send({"response": "success", cuisines})
            else
                res.send({"response": "error", "message" : "cuisines doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const cuisines = await Cuisines.destroy({
                where: {
                    id: id
                }
            })
            if(cuisines > 0)
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
        const image = req.body.image;

        try {
            const cuisines = await Cuisines.update({
                name: name,
                image: image
            },
            {
                where: {
                    id: id
                }
            })
            console.log(cuisines)
            if(cuisines[0] > 0)
                res.send({"response": "success", "message" : "Successfully updated."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to update!"})
        } catch(error) {
            res.send({"response" : "error", "message" : "Sorry, User is deleted or suspended!"})                     
        }         
    },
}