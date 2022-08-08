const express = require("express");
const router = express.Router();
const { Chauffeurs } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async(req, res) => {
    const listOfCars = await Chauffeurs.findAll();
    res.json(listOfCars);
    
})


module.exports = router;