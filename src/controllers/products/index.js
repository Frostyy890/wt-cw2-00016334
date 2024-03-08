import fs from "fs";
import { generateRandomId, writeToFile } from "../../utils/index.js";

//CreateNewProduct

export const createNewProduct = async (req, res, next) => {
  try {
    // Reads database file
    const db = fs.readFileSync(global.db);
    const parsedDb = JSON.parse(db);
    // Getting products from the database
    const { products } = parsedDb;
    // Creating a new product object with info from the request body
    const newProduct = {
      //Generates random number for id
      id: generateRandomId(),
      ...req.body,
      stockQuantity: 0,
    };
    // Adds new product the products array
    await products.push(newProduct);
    // Saving changes
    await writeToFile(global.db, parsedDb);
    // Sends new product and success message to the client
    res.status(201).json({ message: "Created new product", newProduct });
    // Continue
    next();
  } catch (err) {
    // Handling errors
    res.status(500).json("Server Error");
  }
};

//UpdateProduct

export const updateProduct = async (req, res, next) => {
  const productId = Number(req.params.id);
  console.log(productId);
  const updates = req.body;
  try {
    // Reads database file
    const db = fs.readFileSync(global.db);
    const parsedDb = JSON.parse(db);
    // Getting products from the database
    const { products } = parsedDb;
    // Searching for product's index that has an id given in request
    let productIndex = products.findIndex((product) => {
      return product.id === productId;
    });
    // if no such product found
    if (productIndex === -1) {
      return res.status(404).json("Product not found!");
    }
    // updates product with specific index provided above
    products[productIndex] = { ...products[productIndex], ...updates };
    // Saving changes
    await writeToFile(global.db, parsedDb);
    // Sends edited products array and success message to the client
    res.status(200).json({ message: "Product has been updated", products });
    next();
  } catch (err) {
    // Handling errors
    console.error(err);
    res.status(500).json("Server Error");
  }
};

//DeleteProduct

export const deleteProduct = async (req, res, next) => {
  const productId = Number(req.params.id);
  try {
    // Reads database file
    const db = fs.readFileSync(global.db);
    const parsedDb = JSON.parse(db);
    // Getting products from the database
    const { products } = parsedDb;
    // Searching for product's index that has an id given in request
    const productIndex = products.findIndex((product) => {
      return product.id === productId;
    });
    // if no such product found
    if (!productIndex) {
      return res.status(404).json("Product not found!");
    }
    // Deletes product from products array using .splice() method
    products.splice(productIndex, 1);
    // Saving changes
    await writeToFile(global.db, parsedDb);
    // Sends edited products array and success message to the client
    res.status(200).json({ message: "Deleted product", products });
  } catch (err) {
    // Handling errors
    console.error(err);
    res.status(err.statusCode || 500).json("Server Error");
  }
};
