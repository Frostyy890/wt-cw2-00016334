Student ID: 00016334

This project is a web application designed as a dashboard for e-commerce store administration. It allows authorized users to perform CRUD (Create, Read, Update, Delete) operations on product data.

Tech Stack:

Frontend:
Framework: Bootstrap
Template Engine: Pug
HTTP Client: Axios (both CDN and installed package)
Backend:
Framework: Express
Package Manager: pnpm
Other Packages:
Nodemon (development server)
dotenv (environment variables)
body-parser (parsing request bodies)

Folder Structure:
(Note: This project uses a custom folder structure chosen for developer comfort.)
root-directory:
/data - stores the database file: /data/db.json
/public - stores scripts: public/scripts and styles: public/styles used for the frontend
/src - source folder for all of backend logic
src/controllers - controllers for handling of the logic of a specific API route
src/routes - folder for web: /routes/web and api: /routes/api routes
src/utils - reusable utility functions
src/views - web pages
/.env - contains PORT value
/.gitignore - files you want git to ignore e.g: node_modules, .env
/.app.js - main file for listening to the server and for application setup config

Installation:

Clone the following repository: https://github.com/Frostyy890/wt-cw2-00016334

Install dependencies using: pnpm install.
Create a .env file in the project root and configure any necessary environment variables (e.g., port connection details).
Running the Application:

Start the development server using: pnpm dev. This will launch the application using Nodemon and automatically restart upon file changes.

You can access the deployed version of the website using the following link:
http://ec2-16-170-206-132.eu-north-1.compute.amazonaws.com:3000/
