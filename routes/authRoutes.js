const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/register", async(req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

router.post("/login", async(req, res) => {
    const user = await User.findOne({
        email: req.body.email
    });
    if(user && user.password === String(req.body.password)) {
       
        const token = jwt.sign(   //creating a token
            {
                id: user._id,
                role: user._role
            },
            "mysecretkey"
        );
        return res.json({
            message: "Login Successful",
            token
        });
    }
    res.send("Invalid Credentials");
});
module.exports = router;