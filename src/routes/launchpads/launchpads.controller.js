const {
    deleteLaunchpad,
    existsLaunchpadWithId,
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

const httpDeleteLaunchpads = async (req, res) => {
  try {
    const launchpadId = req.params.launchpadId
    const existsLaunchpad = await existsLaunchpadWithId(launchpadId)
    if (!existsLaunchpad) {
      return res.status(400).json({error: "Invalid launchpad ID"})
    }
    const isLaunchpadDeleted = await deleteLaunchpad(launchpadId);
    if (isLaunchpadDeleted) {
      return res.status(200).json({ ok: true })
    } else {
      return res.status(200).json({ ok: false })
    }
  } catch (err) {
    return res.status(500).json({error: "An error has occured"})
  }
}

module.exports = {
    httpGetAllLaunchpads,
    httpGetIndividualLaunchpad,
    httpAddNewLaunchpads,
    httpPatchLaunchpads,
    httpDeleteLaunchpads
}