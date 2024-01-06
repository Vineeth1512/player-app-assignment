const mongoose = require("mongoose");
const express = require("express");
const app =express();
const portNo = 5678;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const playerRoutes =require("./routes/player.routes");
app.set("view engine","ejs");
app.use(express.static("public"));

app.use(playerRoutes);





mongoose.connect("mongodb+srv://dbUser:dbUserPassword@atlascluster.w6sb48g.mongodb.net/Players").then(()=>{
    console.log("Connected to mongoDb Atlas");
    app.listen(portNo,()=>{
        console.log(`Server is started on port no ${portNo}`)
    })
}).catch((err)=>{
    console.log(err);
})