const db = require("../data/db-config.js");

function find() {
    return db("Schemes");
}

function findById(id) {
    return db("Schemes").where({ id });
}
