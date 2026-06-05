const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const messageRoutes = require("./routes/messageRoutes");
const authRoutes = require("./routes/authRoutes");

const logger = require("./middleware/logger");

const app = express();

app.use(express.json());

app.use(logger);

connectDB();

app.use("/api", userRoutes);
app.use("/api", taskRoutes);
app.use("/api", messageRoutes);
app.use("/api", authRoutes);


app.listen(3000, () => {
    console.log("Server Running");
});