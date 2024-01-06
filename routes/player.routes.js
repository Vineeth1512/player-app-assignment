const express =require("express");
const router =express.Router();
const playerController =require("../controllers/player.controllers");

router.get("/",playerController.getHome);
router.get("/players",playerController.getPlayers);
router.get("/nextPlayer",playerController.nextPlayer)
router.post("/createPlayer",playerController.createPlayer);


module.exports =router;