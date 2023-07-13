const launchpads = require("../../models/launchpads.model")

function getAllLaunchpads(req, res) {
    res.status(200).json(launchpads)
}

function getIndividualLaunchpad(req, res) {
}

function postLaunchpads(req, res) {

}

function patchLaunchpads(req, res) {

}

function deleteLaunchpads(req, res) {

}

module.exports = {
    getAllLaunchpads,
    getIndividualLaunchpad,
    postLaunchpads,
    patchLaunchpads,
    deleteLaunchpads,
}