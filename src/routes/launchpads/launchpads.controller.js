const {
    getAllLaunchPads,
} = require("../../models/launchpads.model")

const httpGetAllLaunchpads = async (req, res) => {
    // const launchpads = await getAllLaunchPads()
    // res.status(200).json(launchpads)
    console.log('httpGetAllLaunchpads')
    return res.status(500).json({error: 'Endpoint not implemented'})
}

function httpGetIndividualLaunchpad(req, res) {
}

function httpPostLaunchpads(req, res) {

}

function httpPatchLaunchpads(req, res) {

}

function httpDeleteLaunchpads(req, res) {

}

module.exports = {
    httpGetAllLaunchpads,
    httpGetIndividualLaunchpad,
    httpPostLaunchpads,
    httpPatchLaunchpads,
    httpDeleteLaunchpads
}