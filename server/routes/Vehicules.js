const express = require("express");
const router = express.Router();
const { Chauffeurs } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async(req, res) => {
    const listOfDrivers = await Vehicules.findAll();
    res.json(listOfDrivers);
    
})


module.exports = router;