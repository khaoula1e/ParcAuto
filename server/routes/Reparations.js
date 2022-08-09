const express = require("express");
const router = express.Router();
const { Reparations } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async(req, res) => {
    const listOfReparations = await Reparations.findAll();
    res.json(listOfReparations);
    
})
router.post("/", async(req, res) => {
    const Reparation = req.body;
    await Reparations.create(Reparation);
    res.json(Reparation);

})


module.exports = router;