const mongoose = require("mongoose")

const launchpadsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true,
    },
    launchpad_attempts: {
        type: Number,
        required: true,
    },
    launchpad_successes: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model("Launchpads", launchpadsSchema)