const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Message = require("./models/Message");
const Task = require("./models/Task");


const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/taskDB")
.then(() => {
    console.log("MongoDB Connected");
});

//create user API
app.post("/users", async(req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

//get all users
app.get("/users", async(req, res) => {
    const user = await User.find();
    res.json(user);
});

//update users
app.put("/users/:id", async(req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body, 
        { new: true }
    );
    res.json(user);
});

//create task
app.post("/tasks", async(req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
});

//get tasks
app.get("/tasks", async(req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

//save message
app.post("/messages", async(req, res) => {
    const message = await Message.create(req.body);
    res.json(message);
});

//get message
app.get("/messages", async(req, res) => {
    const message = await Message.find();
    res.json(message);
})

app.listen(3000);