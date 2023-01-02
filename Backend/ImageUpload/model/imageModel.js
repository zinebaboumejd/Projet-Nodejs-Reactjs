const express = require('express');

const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   image:{
       type:Buffer,
        contentType: String
    }
},{timestamps: true});

 module.exports = mongoose.model('Image', imageSchema);