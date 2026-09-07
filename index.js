import express from "express";
import mongoose from "mongoose";
import bookRouter from "./routes/book.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const connection = mongoose.connection;
connection.once("connected",() => console.log("Database connected successfully"));
connection.on("error", (err) => console.log("Database connection error: ", err));
mongoose.connect("mongodb://127.0.0.1:27017/layersarchitecture");

app.use("/book", bookRouter)
app.listen(3000, () => console.log("Server connected!"))
