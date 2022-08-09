const express = require("express");
const router = express.Router();
const { Vehicules } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async(req, res) => {
    const listOfVehicules = await Vehicules.findAll();
    res.json(listOfVehicules);
    
})
router.post("/", async(req, res) => {
    const Vehicule = req.body;
    await Vehicules.create(Vehicule);
    res.json(Vehicule);

})



module.exports = router;