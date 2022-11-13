require('dotenv').config();
const logger = require('../config/logger');
const Currency = require('../models/currency');

module.exports = {

    create: async (req, res) => {

        const name = req.body.name;
        const code = req.body.code;
        const status = req.body.status;

        try{

            const newCurrency = new Currency({
                name: name,
                code: code,
                status: status
            })
            await newCurrency.save()

            if(newCurrency)
                res.send({"response": "success", "message" : "Currency add Successfully."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})

        } catch (error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    getAll: async (req, res) => {
        try{
            const currency = await Currency.findAll()
            if(currency.length > 0){
                res.send({"response": "success", currency})
            }else{
                res.send({"response": "error", "message" : "Currency doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const currency = await Currency.findAll({
                where: {
                    id: id
                }
            })
            if(currency.length > 0)
                res.send({"response": "success", currency})
            else
                res.send({"response": "error", "message" : "currency doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const currency = await Currency.destroy({
                where: {
                    id: id
                }
            })
            if(currency > 0)
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
        const code = req.body.code;
        const status = req.body.status;

        try {
            const currency = await Currency.update({
                name: name,
                code: code,
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