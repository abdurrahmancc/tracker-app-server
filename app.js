const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

/* =============== import routers ============== */
const usersRouter = require("./routers/v1/userRouter");
const expenseRoute = require("./routers/v1/expenseRoute");

/* ================ express app initialization ============== */
dotenv.config();
app.use(
  cors({
    crossDomain: true,
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    allowedHeaders: [
      "Access-Control-Allow-Headers",
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
      "Authorization",
    ],
    exposedHeaders: ["Set-Cookie", "Date", "ETag"],
    origin: [
      "https://support-29169.web.app",
      "http://localhost:3000",
      "https://support-orcin.vercel.app",
      "https://support-29169.firebaseapp.com",
    ],
  })
);

/* ================ set view engine =============== */
app.set("vew engine", "ejs");

/* ===================== request parser ================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= set static folder ============ */
app.use("/public", express.static("public"));

/* =============== Routers =============== */
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/expense", expenseRoute);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
