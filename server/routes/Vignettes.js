const express = require("express");
const router = express.Router();
const { Vignettes } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async(req, res) => {
    const listOfVignettes = await Vignettes.findAll();
    res.json(listOfVignettes);
    
})
router.post("/", async(req, res) => {
    const Vignette = req.body;
    await Vignettes.create(post);
    res.json(post);

})


module.exports = router;