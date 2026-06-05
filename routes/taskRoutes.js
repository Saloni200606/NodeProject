const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const checkAdmin = require("../middleware/checkAdmin");
const auth = require("../middleware/auth");

//create task
router.post("/tasks", checkAdmin, async(req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
});

//view task
router.get("/tasks", auth, async(req, res) => {
    const task = await Task.find();
    res.json(task);
});

//update task
router.put("/tasks/:id", checkAdmin, async(req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.json(task);
});

//delete task
router.delete("/tasks/:id", checkAdmin, async(req, res) => {
    const task = Task.findByIdAndDelete(req.params.id);
    res.json({
        message: "Task Deleted"
    });
});

module.exports = router;