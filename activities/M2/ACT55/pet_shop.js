const ex = require("express");
const fs = require("fs");
const ps = require("./pet_store");
const cors = require("cors");

const app = ex();
app.use(ex.json());
app.use(cors());

const pets = ps.pets;

// API
app.get("/api/pets", (req, res) => {
  res.send(pets);
});

app.get("/api/pets/:id", (req, res) => {
  const petId = Number(req.params.id);
  const pet = pets.find(p => p.id === petId);

  if (pet) {
    res.send(pet);
    console.log(pet);
  } else {
    const err = "Pet not found!";
    res.status(404).send(err);
    console.error(err);
  }
});

app.get("/api/pets/species/:species", (req, res) => {
  const requestedSpecies = req.params.species.toLowerCase();
  const filteredPets = pets.filter(p => p.species.toLowerCase() === requestedSpecies);

  if (filteredPets.length > 0) {
    res.send(filteredPets);
  } else {
    const err = "No pets of that species found!";
    res.status(404).send(err);
  }
});

app.post("/api/pets", (req, res) => {
  const { species, eating_habit, pet_name } = req.body;

  if (!species || !eating_habit || !pet_name) {
    res.status(400).send("Missing required properties in the request");
    return;
  }

  const newPet = {
    id: pets.length,
    species,
    eating_habit,
    pet_name,
  };

  console.log(newPet);
  pets.push(newPet);
  res.send(newPet);
});

app.put("/api/pets/:id", (req, res) => {
  const petId = Number(req.params.id);
  const pet = pets.find(p => p.id === petId);

  if (pet) {
    Object.assign(pet, req.body);
    console.log(pet);
    res.send(pet);
  } else {
    const err = "Pet not found!";
    res.status(404).send(err);
    console.error(err);
  }
});

app.delete("/api/pets/:id", (req, res) => {
  const petId = Number(req.params.id);
  const petIndex = pets.findIndex(p => p.id === petId);

  if (petIndex !== -1) {
    const deletedPet = pets[petIndex];
    pets[petIndex] = {};
    console.log(deletedPet);
    res.send(deletedPet);
  } else {
    const err = "Pet not found!";
    res.status(404).send(err);
    console.error(err);
  }
});

// Main website
app.get("/home", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  console.log("Someone accessed the About page");
  res.send("About page");
});

app.get("/shop", (req, res) => {
  console.log("Someone accessed the Shop page");
  fs.readFile("shop.html", function (err, data) {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
