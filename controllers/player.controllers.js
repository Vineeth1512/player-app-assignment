const { plugin } = require("mongoose");
const Player = require("../modles/player.model");
module.exports.getHome = (req, res) => {
    return res.render("home");

}
let currentIndex =0;
module.exports.getPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        const currentPlayer =players[currentIndex];
        return res.render('player', {
            player: currentPlayer
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }

}

module.exports.nextPlayer = async (req, res) => {
    try {

        
        const players = await Player.find();
        currentIndex = (currentIndex + 1) % players.length;
        console.log(currentIndex);
        const nextPlayer = players[currentIndex];
        res.redirect(`/players`);


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
 

module.exports.createPlayer = async (req, res) => {
    const { name, jerseyNo, team,centuries,halfCenturies, image,type } = req.body;
    if (!name || !jerseyNo || !team || !image ||!halfCenturies ||!centuries||!type) {
        return res.status(400).json({
            message: "All fields are required.."
        })
    }
    const player = new Player({
        name,
        jerseyNo,
        team,
        centuries,
        halfCenturies,
        image,
        type
    });
    const savePlayer = await player.save();
    return res.status(200).json({
        message: "Player added successfully..!",
        player: savePlayer
    })

}