const express = require("express"); // import express
const dotenv = require("dotenv").config(); // import dotenv
const { errorHandler } = require("./auth/middlewares/errorMiddleware"); // custom error handler
const port = process.env.PORT || 2890; // set our port
const app = express();
const connectDB = require("./config/db"); // import db connection
const cors = require("cors");
const multer = require("multer");

 app.use(express.static('uploads'));
connectDB(); // connect to db
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/Api/Auth",require('./auth/routes/authRoute'));
app.use("/Api/Produits",require('../Backend/Produits/router/produitrouter'));
app.use("/Api/Image",require('./ImageUpload/router/imageRouter'));

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`));

