require("dotenv").config();
require("./functions/dbConnect")();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cookieParser());

// importing routers
authRouter = require("./routes/auth");
docsRouter = require("./routes/docs");

app.use("/auth", authRouter);
app.use("/docs", docsRouter);


app.listen(3000, () => {
    console.log("connected!");
});