//Imports
import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { webRouter } from "./src/routes/web/index.js";
import { apiRouter } from "./src/routes/api/index.js";

// Config
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
// Config for files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
global.db = path.join(__dirname, "./data/db.json");
app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "pug");
app.use(express.static("public", { mimetype: "text/css" }));

// API routes
app.use("/api", apiRouter);

// WEB routes
app.use("/", webRouter);

// App listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
  console.log("http://localhost:3000/");
});
