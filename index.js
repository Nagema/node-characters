const express = require("express");
const { connectDb } = require("./src/utils/database/db");
const indexRoutes = require("./src/api/index/index.routes");
const characterRoutes = require("./src/api/characters/characters.routes");

connectDb();

const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/", indexRoutes);
server.use("/characters", characterRoutes);

server.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
