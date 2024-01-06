const mongoose = require("mongoose");
const playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    jerseyNo: {
        type: Number,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    centuries:{
        type:Number,
        required:true
    },
    halfCenturies:{
        type:Number,
        required:true
    },
   type:{
    type: String,
    required: true
   },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Player = mongoose.model("player", playerSchema);
module.exports = Player;
