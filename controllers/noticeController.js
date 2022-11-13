require('dotenv').config();
const logger = require('../config/logger');
const Notice = require('../models/notice');

module.exports = {

    create: async (req, res) => {

        const name = req.body.name;
        const email = req.body.email;
        const device_id  = req.body.device_id;
        const device_os = req.body.device_os;
        const title = req.body.title;
        const notice = req.body.notice;
        const extra_note = req.body.extra_note;

        try{

            const newNotice = new Notice({
                name: name,
                email: email,
                device_id: device_id,
                device_os: device_os,
                title: title,
                notice: notice,
                extra_note: extra_note
            })
            await newNotice.save()

            if(newNotice)
                res.send({"response": "success", "message" : "Notice add Successfully."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to save!"})

        } catch (error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    getAll: async (req, res) => {
        try{
            const notice = await Notice.findAll()
            if(notice.length > 0){
                res.send({"response": "success", notice})
            }else{
                res.send({"response": "error", "message" : "Notice doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const notice = await Notice.findAll({
                where: {
                    id: id
                }
            })
            if(currency.length > 0)
                res.send({"response": "success", notice})
            else
                res.send({"response": "error", "message" : "Notice doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const notice = await Notice.destroy({
                where: {
                    id: id
                }
            })
            if(notice > 0)
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
        const email = req.body.email;
        const device_id  = req.body.device_id;
        const device_os = req.body.device_os;
        const title = req.body.title;
        const notice = req.body.notice;
        const extra_note = req.body.extra_note;


        try {
            const notice = await Notice.update({
                name: name,
                email: email,
                device_id: device_id,
                device_os: device_os,
                title: title,
                notice: notice,
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