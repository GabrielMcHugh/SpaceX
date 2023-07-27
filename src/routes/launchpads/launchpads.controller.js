const {
    getAllLaunchPads,
    saveLaunchpad
} = require("../../models/launchpads.model")
const launchpadFields = require("../../models/launchpads.enum")

const httpGetAllLaunchpads = async (req, res) => {
    try {
        const launchpads = await getAllLaunchPads()
        res.status(200).json(launchpads)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Launchpads not found'})
    }
}

function httpGetIndividualLaunchpad(req, res) {
    
}

const httpAddNewLaunchpads = async (req, res) => {
  const launchPad = req.body;
  const requiredFields = launchpadFields;
  const missingFields = [];

  for (const field in requiredFields) {
    if (!launchPad[field]) {
      missingFields.push(field);
    }
  }

  if (missingFields.length > 0) {
    return res.status(400).json({ error: `Missing fields: ${missingFields.join(", ")}` });
  }

  return await saveLaunchpad(launchPad, res);
};

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