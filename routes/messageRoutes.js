const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.post("/messages", async(req, res) => {
    const message = await Message.create(req.body);
    res.json(message);
});

router.get("/messages", async(req, res) => {
    const message = await Message.find();
    res.json(message);
});


module.exports = router;