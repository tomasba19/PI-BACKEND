const { Router } = require("express");
const countriesRouter = Router();
const getCountriesManager = require("../controllers/country.js")

countriesRouter.get("/",async (req, res) =>{await getCountriesManager(req, res)});

countriesRouter.get("/:id",async (req, res) =>{await getCountriesManager(req, res)});



module.exports = countriesRouter;