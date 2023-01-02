const express = require('express');
const asyncHandler = require("express-async-handler");
const multer = require('multer');
const Image = require('../model/imageModel');
const path = require('path');   
const { response } = require('express');

 const getImages = asyncHandler(async (req, res) => {
    try {
        const images = await Image.find({});
        res.send(images);
    } catch (error) {
        res
            .status(500)
            .send({ message: 'Error while getting images', error: error.message });
    }
});
// @desc    Upload image
const addImage = asyncHandler(async (req, res) => {
        try {
            const image = new Image({
                name: req.body.name,
                
            });
            if(req.file){
                image.image = req.file.path;
                // image.contentType = req.file.mimetype;
            }
            const newImage = await image.save();
            res.send(newImage);
            res.json({ message: 'Image added successfully' });
            console.log(newImage);
        } catch (error) {
            // res.json({ message: 'Image not added' });
            console.log(error);
            // res
            //     .status(500)
            //     .send({ message: 'Error while adding image', error: error.message });
        }
    }
);


const updateImage = asyncHandler(async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        
        if (image) {
         
            image.image = req.body.image;
            const updatedImage = await image.save();
            res.send(updatedImage);
        } else {
            res.status(404).send({ message: 'Image not found' });
        }
    } catch (error) {
        res

            .status(500)
            .send({ message: 'Error while updating image', error: error.message });
    }
});

const deleteImage = asyncHandler(async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (image) {
            const deletedImage = await image.remove();
            res.send(deletedImage);
        } else {
            res.status(404).send({ message: 'Image not found' });
        }
    } catch (error) {
        res
            .status(500)
            .send({ message: 'Error while deleting image', error: error.message });
    }
});

module.exports = {
    addImage,
    getImages,
    updateImage,
    deleteImage
}


