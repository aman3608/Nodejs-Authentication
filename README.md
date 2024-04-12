# Nodejs-Authentication
  This is a Nodejs Authentication project of Coding Ninjas made using Nodejs, Express, MongoDB, EJS.


# Installation and Run 
  Follow these steps:
  - Get the code on your system.
  - Open terminal on your pc and navigate to the root directory of the project.
  - Run "npm install" command inside the terminal to install all the required dependencies.
  - Create a '.env' file inside root directory and define values for
      - PORT ( port on which your project will run )
      - SECRET_KEY ( Secret key that will be used for encryption )
      - DATABASE_URL ( URL of your mongoDB database for connecting to database )
  - Run 'npm start' / 'npm index.js' command inside terminal to run the code.
  - Open your web browser and serach for 'localhost:{PORT}/' to see the output.

# Features
  -User signup  on this page ..Name,Email_ID, and Password.
  -User sign in on this page...Name and Password.
  -User can reset or change password.Enter your name , Enter your old password and Enter new password. The Password store in mongoDB has encrypted 

# Tools used:
  - Nodejs
  - Expressjs
  - Express-flash
  - Express-session
  - MongoDB
  - EJS
  - CSS
  - JavaScript
  - Passport
  - Passport-local
  - Passport-local-mongoose