
const asyncHandler = require("express-async-handler");
const Produit = require("../model/produitModel");


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProduits = asyncHandler(async (req, res) => {
    const produits = await Produit.find({});
    res.json(produits);
    }
);
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProduitById = asyncHandler(async (req, res) => {
    const produit = await Produit.findById(req.params.id);

    if (produit) {
        res.json(produit);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
}
);
// @desc    ADD a product
// @route   POST /api/products
// @access  Private/Admin
const addProduit = asyncHandler(async (req, res) => {
    const { name, price, description} = req.body;

    const produit = new Produit({
        name,
        price,
        description,
    });

    const createdProduit = await produit.save();
    res.status(201).json(createdProduit);
}
);

// @desc    update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduit = asyncHandler(async (req, res) => {
    const { name, price, description} = req.body;
    const produit = await Produit.findById(req.params.id);

    if (produit) {
        produit.name = name;
        produit.price = price;
        produit.description = description;

        const updatedProduit = await produit.save();
        res.json(updatedProduit);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
}
);

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduit = asyncHandler(async (req, res) => {
    const produit = await Produit.findById(req.params.id);

    if (produit) {
        await produit.remove();
        res.json({ message: "Product removed" });
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
}
);

module.exports = {
    getProduits,
    addProduit,
    deleteProduit,
    updateProduit,
    getProduitById
};