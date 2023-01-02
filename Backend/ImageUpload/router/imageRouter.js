const express = require("express");
const nodemon = require("nodemon");
const router = express.Router();
const multer = require("multer");

const upload = require("../middlewares/upload");

const {
    addImage,
    getImages,
    updateImage,
    deleteImage
} = require("../controller/imageController");

router.post("/addImage", upload.single('image'), addImage);
router.get("/getImages", getImages);
router.put("/updateImage/:id", updateImage);
router.delete("/deleteImage/:id", deleteImage);

module.exports = router;

