const db = require("../data/db-config.js");

function find() {
    return db("schemes");
}

async function findById(id) {
    const schemes = await db("schemes").where({ id });
    return schemes;
}

async function findSteps(id) {
    const steps = await db("schemes as s")
        .join("steps as st", "s.id", "st.scheme_id")
        .select("s.id", "s.scheme_name", "st.step_number", "st.instructions")
        .where("s.id", id);
    return steps;
}

async function add(scheme) {
    const [newSchemeId] = await db("schemes").insert(scheme);
    return findById(newSchemeId);
}

function update(changes, id) {
    return db("schemes").where({ id }).update(changes);
}

function remove(id) {
    return db("schemes").where({ id }).del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
};
