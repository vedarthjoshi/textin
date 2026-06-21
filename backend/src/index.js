// const express = require("express");

import express from "express";
import cors from "cors";
import "dotenv/config";
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";

//ini
const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

// Middlewares
app.use(express.json());
app.use(cors({origin:FRONTEND_URL,credentials:true}));
app.use(clerkMiddleware());

//configs
app.listen(PORT, () => {
  connectDB();
  console.log("Shits Running on -> http://localhost:%s", PORT);
});

//routes
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});
