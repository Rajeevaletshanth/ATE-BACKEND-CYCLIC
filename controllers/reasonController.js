require('dotenv').config();
const logger = require('../config/logger');
const Reason = require('../models/reason');

module.exports = {

    create: async (req, res) => {

        const reason = req.body.reason;

        try{

            const newreason = new Reason({
                reason: reason

            })
            await newreason.save()

            if(newreason)
                res.send({"response": "success", "message" : "Reason add Successfully."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})

        } catch (error) {
            res.send({"response": "error", "message" : "Undefined error occured!", error});
        }
    },


    getAll: async (req, res) => {
        try{
            const reason = await Reason.findAll()
            if(reason.length > 0){
                res.send({"response": "success", reason})
            }else{
                res.send({"response": "error", "message" : "Reason doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const reason = await Reason.findAll({
                where: {
                    id: id
                }
            })
            if(reason.length > 0)
                res.send({"response": "success", reason})
            else
                res.send({"response": "error", "message" : "Reason doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const reason = await Reason.destroy({
                where: {
                    id: id
                }
            })
            if(reason > 0)
                res.send({"response": "success", "message" : "Successfully deleted."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to delete!"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});                     
        }
    },
    

    edit : async(req, res) => {
        const  { id } = req.params;

        const reason = req.body.reason;

        try {
            const newReason = await Reason.update({
                reason: reason

            },
            {
                where: {
                    id: id
                }
            })
            if(newReason[0] > 0)
                res.send({"response": "success", "message" : "Successfully updated."});
            else
                res.send({"response" : "error", "message" : "Sorry, failed to update!"});
        } catch(error) {
            res.send({"response" : "error", "message" : "Sorry, User is deleted or suspended!"})                     
        }         
    },
}