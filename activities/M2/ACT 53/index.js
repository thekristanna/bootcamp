const ex = require("express");
// const fs = require("fs");
const ps = require("./pet_store");
const app = ex();

app.use(ex.json());
const p = ps.pets;

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
        res.send("Pet not found!");
        console.log(err);
    }
});

// part 3
app.get("/api/pets/list/species", (req, res) => {
    let uniqueSpecies = [];

    for (let i = 0; i < p.length; i++) {
        let currentSpecies = p[i].species;
        
        if (uniqueSpecies.includes(currentSpecies) == false) {
            uniqueSpecies.push(currentSpecies);
        }
    }

    res.send(uniqueSpecies);
});

app.listen(3001);
console.log("Starting server...")