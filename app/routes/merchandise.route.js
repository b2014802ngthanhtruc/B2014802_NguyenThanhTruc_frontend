const express = require("express");
const merchandises = require("../controllers/merchandise.controller");

const router = express.Router();

router.route("/")
    .get(merchandises.findAll)
    .post(merchandises.create)
    .delete(merchandises.deleteAll);


router.route("/:id")
    .get(merchandises.findOne)
    .put(merchandises.update)
    .delete(merchandises.delete);

module.exports = router;