const express = require("express");
const router = express.Router();
const checkSuperAdmin = require("../middleware/checkSuperAdmin");

const User = require("../models/User");

router.get("/test", (req, res) => {
    res.send("user route working");
})

router.post("/users", async(req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

router.get("/users", async(req, res) => {
    const users = await User.find();
    res.json(users);
});

router.put("/users/:id", async(req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(user);
});

router.delete("/users/:id", checkSuperAdmin, async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send("User Deleted");
});
module.exports = router;