// initialization
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// model
const Note = require("./models/note");

const mongodbPath = "mongodb+srv://abdulrafaykhatana:abdulrafay@cluster0.itquoe2.mongodb.net/notesdb";
mongoose.connect(mongodbPath).then(()=> {

    // app routes
    app.get("/", (req, res)=> {
        res.send("This is the Home page of Notes App...");
    });

    const noteRouter = require("./routes/note")
    app.use("/notes", noteRouter);

});

// start a server on a port
const port = process.env.port || 5000;
app.listen(port, ()=> {
    console.log("Server started at port " + port);
});
