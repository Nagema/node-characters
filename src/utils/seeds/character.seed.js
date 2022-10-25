const { mongoose } = require("mongoose");
require("dotenv").config();
const Character = require("../../api/models/character");
const DB_URL = process.env.DB_URL;

const characters = [
  {
    name: "Goku",
    race: "saiyan",
    universe: 7,
    transform: true,
    genre: "male",
  },
  {
    name: "Piccolo",
    race: "namekian",
    universe: 7,
    transform: true,
    genre: "namekian",
  },
  {
    name: "Cabba",
    race: "saiyan",
    universe: 6,
    transform: true,
    genre: "male",
  },
  {
    name: "Kale",
    race: "saiyan",
    universe: 6,
    transform: true,
    genre: "female",
  },
  {
    name: "A18",
    race: "android",
    universe: 7,
    transform: false,
    genre: "female",
  },
  {
    name: "Krillin",
    race: "human",
    universe: 7,
    transform: false,
    genre: "male",
  },
  {
    name: "Jiren",
    race: "unknown",
    universe: 11,
    transform: false,
    genre: "male",
  },
  {
    name: "Zen-oh",
    race: "unknown",
    universe: 0,
    transform: false,
    genre: "genderless",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    await Character.collection.drop();
    console.log("Colección Characters se ha eliminado");
  })
  .catch((error) => console.log("Los datos no se han podido eliminar " + error))
  .then(async () => {
    await Character.insertMany(characters);
    console.log("Se han generado los personajes");
  })
  .catch((error) => console.log("No se han metido los datos " + error))
  .finally(() => mongoose.disconnect());
