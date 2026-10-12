// Creating Server for Mongoose..
const mongoose = require('mongoose');

// After Installing DotENV and using DotENV for using the data of .env files..
require("dotenv").config();

// Connecting MongoDB..
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {console.log("DataBase Connection is Successful.");})
        .catch((error) => {
            console.log("DataBase Connection is Failed.");
            console.error(error);
            // Immediately terminates the running Node.js server process and returns an exit code of 1 to the operating system or hosting environment, indicating that the application crashed or stopped due to an unhandled error.
            process.exit(1); // This helps to exit from the error if error is found 1 means Ture & 0 means False
        })
}

module.exports = dbConnect;