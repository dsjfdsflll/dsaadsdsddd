const { Schema, model } = require("mongoose");

const schema = new Schema({
    guildID: { type: String, default: "" },
    Safe: {type: Array, default: ""}, 

});

module.exports = model("databasefenice", schema);