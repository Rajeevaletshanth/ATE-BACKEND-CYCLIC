require('dotenv').config();
const logger = require('../config/logger');
const DeliveryPeople = require('../models/deliveryPeople');

module.exports = {

    create: async (req, res) => {

        const restaurant_id = req.body.restaurant_id;
        const name = req.body.name;
        const email = req.body.email;
        const address = req.body.address;
        const latitude = req.body.latitude;
        const longtitude = req.body.longtitude;
        const image = req.body.image;
        const country_code = req.body.country_code;
        const phone_no  = req.body.phone_no;
        const device_id = req.body.device_id;
        const device_os = req.body.device_os;
        const delivery_status = req.body.delivery_status;

        try {

            const newDeliverProple = new DeliveryPeople({
                restaurant_id: restaurant_id,
                name: name,
                email: email,
                address: address,
                latitude: latitude,
                longtitude: longtitude,
                image: image,
                country_code: country_code,
                phone_no: phone_no,
                device_id: device_id,
                device_os: device_os,
                delivery_status: delivery_status
            })
            await newDeliverProple.save()

            if (newDeliverProple)
                res.send({ "response": "success", "message": "Delivery People add Successfully." })
            else
                res.send({ "response": "error", "message": "Sorry, failed to save!" })

        } catch (error) {
            res.send({ "response": "error", "message": "Undefined error occured!" });
        }
    },

    getAll: async (req, res) => {
        try{
            const deliveryPeople = await DeliveryPeople.findAll()
            if(cuisines.length > 0){
                res.send({"response": "success", deliveryPeople})
            }else{
                res.send({"response": "error", "message" : "delivery People doesn't exist"})
            }
        }catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const deliveryPeople = await DeliveryPeople.findAll({
                where: {
                    id: id
                }
            })
            if(cuisines.length > 0)
                res.send({"response": "success", deliveryPeople})
            else
                res.send({"response": "error", "message" : "delivery People doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },


    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const deliveryPeople = await DeliveryPeople.destroy({
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
        
        const restaurant_id = req.body.restaurant_id;
        const name = req.body.name;
        const email = req.body.email;
        const address = req.body.address;
        const latitude = req.body.latitude;
        const longtitude = req.body.longtitude;
        const image = req.body.image;
        const country_code = req.body.country_code;
        const phone_no  = req.body.phone_no;
        const device_id = req.body.device_id;
        const device_os = req.body.device_os;
        const delivery_status = req.body.delivery_status;

        try {
            const deliveryPeople = await DeliveryPeople.update({
                restaurant_id: restaurant_id,
                name: name,
                email: email,
                address: address,
                latitude: latitude,
                longtitude: longtitude,
                image: image,
                country_code: country_code,
                phone_no: phone_no,
                device_id: device_id,
                device_os: device_os,
                delivery_status: delivery_status
            },
            {
                where: {
                    id: id
                }
            })
            if(deliveryPeople[0] > 0)
                res.send({"response": "success", "message" : "Successfully updated."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to update!"})
        } catch(error) {
            res.send({"response" : "error", "message" : "Sorry, User is deleted or suspended!"})                     
        }         
    },

}