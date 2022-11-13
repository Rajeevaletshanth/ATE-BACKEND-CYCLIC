require('dotenv').config();
const logger = require('../config/logger');
const Reason = require('../models/reason');

module.exports = {

    create: async (req, res) => {

        const reason = req.body.reason;
        const extra_note = req.body.extra_note;

        try{

            const newreason = new Reason({
                reason: reason,
                extra_note: extra_note
            })
            await newreason.save()

            if(newreason)
                res.send({"response": "success", "message" : "Reason add Successfully."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})

        } catch (error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
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
        const extra_note = req.body.extra_note;

        try {
            const reason = await Reason.update({
                nreason: reason,
                extra_note: extra_note
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