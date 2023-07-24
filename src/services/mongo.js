const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("mongodb connection ready!");
});

mongoose.connection.on("disconnected", () => {
  console.log("Server disconnected from mongoDB");
});

async function connectMongoose() {
  try {
    await mongoose.connect(MONGO_URL);

    mongoose.connection.on("error", (err) => {
      console.error(err);
    });
    
  } catch (err) {
    console.log(err);
  }
}

async function disconnectMongoose() {
  await mongoose.disconnect();
}

module.exports = {
  connectMongoose,
  disconnectMongoose,
};
