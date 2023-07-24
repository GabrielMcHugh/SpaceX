const http = require("http");
require("dotenv").config();

const app = require("./app");
const { connectMongoose } = require("./services/mongo");
const { loadLaunchpads } = require("./models/launchpads.model")

const PORT = process.env.PORT || 3100;
const server = http.createServer(app);

async function startServer() {
    connectMongoose();
    // loadLaunchpads()
  
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer()