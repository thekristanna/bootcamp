const ex = require("express");
const ps = require("./pet_store");

const app = ex();
const p = ps.pets;

app.use(ex.json());


// part 1
app.get("/api/pets", (req, res) => {
  res.send(p);
});

// part 2
app.get("/api/pets/:id", (req, res) => {
  let pet = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet = p[i];
      break;
    }
  }

  if (pet) {
    res.send(pet);
    console.log(pet);
  } else {
    let err = "Pet not found!";
    res.status(404);
    res.send(err);
    console.error(err);
  }
});


// part 3
app.get("/api/pets/list/species", (req, res) => {
  let species = [];
  for (let i = 0; i < p.length; i++) {
    if (species.includes(p[i].species) == false) {
      species.push(p[i].species);
    }
  }

  res.send(species);
});


// part 4
app.put("/api/pets", (req, res) => {  
    const { species, eating_habit, pet_name } = req.body;

    if (!species || !eating_habit || !pet_name) {
      res.status(404);
      res.send("Missing required properties in the request");
      return;
    }

    let new_pet = {
      id: p.length,
      species: species,
      eating_habit: eating_habit,
      pet_name: pet_name,
    };

    console.log(new_pet);
    p.push(new_pet);
    res.send(new_pet);
});

// part 5
app.put("/api/pets/:id", (req, res) => {
    let pet = false;
  
    for (let i = 0; i < p.length; i++) {
      if (p[i].id == Number(req.params.id)) {
        pet = p[i];
        break;
      }
    }
  
    if (pet) {
      if (req.body.species) {
        pet.species = req.body.species;
      }
      if (req.body.eating_habit) {
        pet.eating_habit = req.body.eating_habit;
      }
      if (req.body.pet_name) {
        pet.pet_name = req.body.pet_name;
      }
  
      console.log(pet);
      res.send(pet);
    } else {
      let err = "Pet not found!";
      res.status(404);
      console.log(err);
      res.send(err);
    }
});

// part 6
app.delete("/api/pets/:id", (req, res) => {
    let pet = false;
  
    for (let i = 0; i < p.length; i++) {
      if (p[i].id == Number(req.params.id)) {
        pet = p[i];
        break;
      }
    }
  
    if (pet) {
      let index = p.indexOf(pet);
      p[index] = {};
  
      console.log(pet);
      res.send(pet);
    } else {
      let err = "Pet not found!";
      res.status(404);
      console.log(err);
      res.send(err);
    }
});


app.listen(3001);
console.log("Starting server...");
