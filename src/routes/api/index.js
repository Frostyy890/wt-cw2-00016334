import express from "express";
import {
  createNewProduct,
  deleteProduct,
  updateProduct,
} from "../../controllers/products/index.js";

const router = express.Router();
// Product handlers
// Creates new product
router.post("/products", createNewProduct);
// Updates the product with given product id
router.patch("/products/:id", updateProduct);
// Deletes the product with given product id
router.delete("/products/:id", deleteProduct);
export { router as apiRouter };
