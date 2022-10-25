const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

if (!DB_URL) throw new Error("No se encuentra la URL a la base de datos");

const connectDb = async () => {
  try {
    const db = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(
      `estas conectado a la base de datos ${name} en el host: ${host}`
    );
  } catch (error) {
    console.log("No se ha podido conectar a la base de datos" + error);
  }
};

module.exports = {
  connectDb,
};
