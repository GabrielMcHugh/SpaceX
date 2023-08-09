const axios = require("axios");

const LaunchpadsModel = require("./launchpads.mongo");

//Returns boolean whether launchpad exists in db
const existsLaunchpadWithId = async (launchpadId) => {
  try {
    let response = await LaunchpadsModel.findById(launchpadId);
    return !!response ? true : false;
  } catch (err) {
    console.log(`Could not find launchpad with that ID due to: ${err}`)
    return false
  }

}

const deleteLaunchpad = async (req, res) => {

}

const saveLaunchpad = async (launchpad, res) => {
  try {
    await LaunchpadsModel.findOneAndUpdate(
      {
        name: launchpad.name,
      },
      launchpad,
      { upsert: true }
    );
    return res.status(201).json(launchPad)
  } catch (err) {
    return res.status(500).json({error: "Server failed to save data"})
  }
};

const SPACEX_API_URL = "https://api.spacexdata.com/v4/launchpads";
async function loadLaunchpads() {
  try {
    //Check if launchpads have already been loaded
    let docCount = await LaunchpadsModel.count();

    if (docCount === 0) {
      console.log("Loading Launchpads into database");
      const response = await axios.get(SPACEX_API_URL);
      const padData = response.data;
      for (const pad of padData) {
        const newLaunchpad = {
          name: pad.name,
          locality: pad.locality,
          region: pad.region,
          launch_attempts: pad.launch_attempts,
          launch_successes: pad.launch_successes,
        };
        await saveLaunchpad(newLaunchpad);
      }
    }
  } catch (error) {
    console.error("Could not load launchpads due to: ", error);
  }
}

const getAllLaunchPads = async () => {
  const launchPads = await LaunchpadsModel.find({});
  return launchPads;
};

module.exports = {
  existsLaunchpadWithId,
  deleteLaunchpad,
  saveLaunchpad,
  loadLaunchpads,
  getAllLaunchPads,
};
