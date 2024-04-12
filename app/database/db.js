require("dotenv").config();
const mongoose = require("mongoose");
exports.connectMongoose = () => {
  mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    })
    .then((e) => console.log("Connected to Mongodb"))
    .catch((e) => console.log("Mongodb connection failed"));
};
