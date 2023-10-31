const MerchandiseService = require("../services/merchandise.service");
const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");

exports.create = async (req, res, next) =>{
    if(!req.body?.name) {
        return next(new ApiError(400, "Name can not be empty"));
    }

    try {   

        const merchandiseService = new MerchandiseService(MongoDB.client); 
        
        const document = await merchandiseService.create(req.body);
        
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, "An error occured while creating the merchandise")
        );
    }
};
exports.findAll = (req,res) => {
    res.send({message: "findAll handler"});
};
exports.findOne = (req,res) => {
    res.send({message: "findOne handler"});
};
exports.update = (req,res) => {
    res.send({message: "update handler"});
};
exports.delete = (req,res) => {
    res.send({message: "delete handler"});
};
exports.deleteAll = (req,res) => {
    res.send({message: "deleteAll handler"});
}