const mongoose = require("mongoose");

const produitSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"],
        },
          price: {
            type: Number,
            required: [true, "Please enter your price"],
        },
        description: {
            type: String,
            required: [true, "Please enter your description"],
        },
      
        // image: {
        //     type: String,
        //     required: [true, "Please enter your image"],
        // },

    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("produit", produitSchema);