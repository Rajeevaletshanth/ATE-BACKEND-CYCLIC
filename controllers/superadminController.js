const bcrypt = require("bcrypt");
const saltRounds = 10;
require('dotenv').config();
const transporter = require('../services/nodemailer/mailer');
require('dotenv').config();

const Admin = require('../models/admin');

module.exports = {
    
    create: async (req, res) => {
        const username = req.body.username;         
        const authority = JSON.stringify(req.body.authority);
        const email = req.body.email;
        const password = req.body.password; 

        try {
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                if (err) {
                    res.send({"response": "error", "message" : "Encryption error!"});
                } else {   
                    try { 
                        const newAdmin = new Admin({
                            username: username,
                            authority: authority,
                            email: email,
                            password: hash
                        })
                        await newAdmin.save()

                        let mailOptions = {
                            from: `LTW Tech <${process.env.MAILER_USER}>`, 
                            to: email,
                            subject: 'User created', 
                            html: `<b> Use this credentials to login : </b> <br/>
                                 Link : ${process.env.CLIENT_URL}/sign-in <br/>
                                 Email : ${email} <br/> 
                                 Password : ${password}`
                        }
            
                        transporter.sendMail(mailOptions, (err, info) => {
                            if(err){
                                res.send({"response" : "warning", "message" : "User created but email not send." })
                            }else{
                                res.send({"response" : "success", "message" : `User created and email sent to ${email}`})
                            }
                        })                       
                    } catch(error) { 
                        res.send({"response": "error", "message" : "This email is already registered."});
                    }         
                }
            });
        } catch (error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    getAll: async (req, res) => {
        try {
            const admin = await Admin.findAll()
            if(admin.length > 0)
                res.send({"response": "success", admin})
            else
                res.send({"response": "error", "message" : "User doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    getByid: async (req, res) => {
        const id = req.params.id
        try {
            const admin = await Admin.findAll({
                where: {
                    id: id
                }
            })
            if(admin.length > 0)
                res.send({"response": "success", admin})
            else
                res.send({"response": "error", "message" : "User doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});
        }
    },

    getByEmail: async (req, res) => {
        const email = req.body.email;
        try {
            const admin = await Admin.findAll({
                where: {
                    email: email
                }
            })
            if(admin.length > 0)
                res.send({"response": "success", admin})
            else
                res.send({"response": "error", "message" : "User doesn't exist"})
        } catch(error) {
            res.send({"response": "error", "message" : "User doesn't exist"})
        }
    },


    //Soft delete and activate
    access_control : async(req, res) => {
        const  { id } = req.params;
        const is_deleted = req.body.is_deleted;
        const authority = JSON.stringify(req.body.authority);
        try {
            const admin = await Admin.update({
                authority: authority,
                is_deleted : is_deleted
            },
            {
                where: {
                    id: id
                }
            })
            if(admin[0] > 0)
                res.send({"response": "success", "message" : "Successfully updated."})
            else
                res.send({"response": "error", "message" : "Sorry, failed to update!"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});                      
        }         
    },

    //Hard delete
    delete : async(req, res) => {
        const  { id } = req.params;

        try {
            const admin = await Admin.destroy({
                where: {
                    id: id
                }
            })
            console.log(admin)
            if(admin > 0)
                res.send({"response": "success", "message" : "Successfully deleted."})
            else
                res.send({"response" : "error", "message" : "Sorry, failed to delete!"})
        } catch(error) {
            res.send({"response": "error", "message" : "Undefined error occured!"});                     
        }
    }
}