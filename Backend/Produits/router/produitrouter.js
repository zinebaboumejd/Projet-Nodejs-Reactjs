const express = require("express");
const router = express.Router();
const { getProduits,
     deleteProduit,
     addProduit,
     updateProduit,
     getProduitById,
     } = require("../controller/produitController");

router.route("/getProduits").get(getProduits);
router.route("/getProduitById/:id").get(getProduitById);
router.route("/addProduit").post(addProduit);
router.route("/updateProduit/:id").put(updateProduit);
router.route("/deleteProduit/:id").delete(deleteProduit);


module.exports = router;