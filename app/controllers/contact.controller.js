const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util")

//Create and Save a new Contact
exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, "Name can not be empty"));
    }

    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(new ApiError(500, "An error occured while creating the contact"));
    }
};

exports.findAll = (req, res) =>{
    res.send({ mesage: "finfALL handler" });
};

exports.findOne = (req, res) =>{
    res.send({ message: "findOne handler" });
};

exports.update = (req, res) =>{
    res.send({ mesage: "update handler" });
};

exports.delete = (req, res) =>{
    res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res) =>{
    res.send({ mesage: "deleteALL handler" });

};

exports.findAllFavorite = (req, res) =>{
    res.send({ mesage: "finfALLFavorite handler" });
};