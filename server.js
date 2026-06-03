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

//delete user
app.delete("/users/:id", async(req, res) => {
   await User.findByIdAndDelete(req.params.id);
   res.json({
    message: "User Deleted"
   });
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

//update task
app.put("/tasks/:id", async(req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } //returns the updated user
    );
    res.json(task);
});

//delete task
app.delete("/tasks/:id", async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        message: "Task deleted"
    });
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
});

app.post("/register", async(req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

app.post("/login", async(req, res) => {
    console.log(req.body);
    const user = await User.findOne({
        email: req.body.email
    });
    console.log(user);
    console.log(user.password);
    console.log(req.body.password);
    console.log(typeof user.password);
console.log(typeof req.body.password);
    if(user && user.password === String(req.body.password)){
        res.send("Login Successful");
    }
    else {
        res.send("Invalid Credentials")
    }
});


app.listen(3000);