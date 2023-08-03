const { Router } = require("express");
const activitiesRoutes = Router();
const { getActivities, postActivities} =  require("../controllers/activity");

activitiesRoutes.post("/",async (req, res) =>{await postActivities(req, res)});
activitiesRoutes.get("/",async (req, res) =>{await getActivities(req, res)})

module.exports = activitiesRoutes;