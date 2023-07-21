const {
    getAllLaunchPads,
    saveLaunchpad
} = require("../../models/launchpads.model")

const httpGetAllLaunchpads = async (req, res) => {
    const launchpads = await getAllLaunchPads()
    res.status(200).json(launchpads)
    // console.log('httpGetAllLaunchpads')
    // return res.status(500).json({error: 'Endpoint not implemented'})
}

function httpGetIndividualLaunchpad(req, res) {
}

const httpAddNewLaunchpads = async (req, res) => {
    const launchPad = req.body
    //Check that it has all the required properties
    if (
        !launchPad.mission ||
        !launchPad.locality ||
        !launchPad.region ||
        !launchPads.launch_attempts ||
        !launchPad.launch_successes
    ) {
        return res.status(400).json({ error: "Missing fields required"})
    }

    await saveLaunchpad(launchPad)
    return res.status(201).json(launchPad)
    
}

function httpPatchLaunchpads(req, res) {

}

function httpDeleteLaunchpads(req, res) {

}

module.exports = {
    httpGetAllLaunchpads,
    httpGetIndividualLaunchpad,
    httpAddNewLaunchpads,
    httpPatchLaunchpads,
    httpDeleteLaunchpads
}