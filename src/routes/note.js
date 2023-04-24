const express = require("express");
const router = express.Router();

const Note = require("./../models/note");

router.get("/list/:user_id", async (req, res)=> {
    const notes = await Note.find({ user_id: req.params.user_id });
    res.json(notes);
});

router.post("/add", async (req, res)=> {

    // if exist, delete that - used for updating
    await Note.deleteOne({ id: req.body.id });

    const newNote = new Note({
        id: req.body.id,
        user_id: req.body.user_id,
        title: req.body.title,
        content: req.body.content,
    });
    
    await newNote.save();

    const response = { message: "New note created! " + `id: ${req.body.id}`};
    res.json(response);
});

router.delete("/delete", async (req, res)=> {

    await Note.deleteOne({ id: req.body.id });

    const response = { message: "Note deleted! " + `id: ${req.body.id}`};
    res.json(response);
});

module.exports = router;
