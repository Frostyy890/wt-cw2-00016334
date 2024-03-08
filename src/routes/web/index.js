import express from "express";
import fs from "fs";

// Handling WEB routes
const router = express.Router();
// Renders the main dashboard page with products from the database
router.get("/", (req, res) => {
  try {
    // Reads database file
    fs.readFile(global.db, (err, data) => {
      if (err) {
        // Handling errors
        console.error("Error reading file:", err);
        return res.status(500).send("Internal Server Error");
      }
      const parsedData = JSON.parse(data);
      // Getting products from the database
      const { products } = parsedData;
      // sending products and rendering dashboard.pug
      res.render("dashboard", { products: products });
    });
  } catch (err) {
    // Handling errors
    res.status(500).send("Server Error");
  }
});

// Renders the page with form for editing
router.get("/edit/:id", (req, res) => {
  // Accessing id of the product that needs to be edited
  const productId = Number(req.params.id);
  try {
    // Reads the database file
    fs.readFile(global.db, (err, data) => {
      if (err) {
        // Handling errors
        console.error("Error reading file:", err);
        return res.status(500).send("Internal Server Error");
      }
      const parsedData = JSON.parse(data);
      // Getting products from the database
      const { products } = parsedData;
      // Searching for the product with id from request
      const productInDb = products.find((product) => {
        return product.id === productId;
      });
      // Checks if product is in the database
      if (!productInDb) {
        return res.status(404).send("Product not found");
      }
      // Sends the product and renders the form.pug
      res.render("form", { product: productInDb });
    });
  } catch (err) {
    // Handling errors
    res.status(500).send("Server Error");
  }
});
// Renders the same form.pug on a different route
router.get("/create", (req, res) => {
  res.render("form");
});

export { router as webRouter };
