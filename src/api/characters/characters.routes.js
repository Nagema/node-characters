const express = require("express");
const Character = require("../models/character");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allCharacters = await Character.find();
    console.log(allCharacters);
    return res.status(200).json(allCharacters);
  } catch (error) {
    return res.status(500).json("Error en el servidor");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const characterToFind = await Character.findById(id);
    console.log(characterToFind);
    return res.status(200).json(characterToFind);
  } catch (error) {
    return res.status(500).json("No se encontró el personaje");
  }
});

router.post("/create", async (req, res) => {
  try {
    const character = req.body;
    const newCharacter = new Character(character);
    const created = await newCharacter.save();
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json("Error al crear el personaje");
  }
});

module.exports = router;
