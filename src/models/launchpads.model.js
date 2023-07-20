const axios = require("axios");

const LaunchpadsModel = require("./launchpads.mongo");

const saveLaunchpad = async (launchpad) => {
    await LaunchpadsModel.findOneAndUpdate(
        {
            name: launchpad.name
        },
        launch,
        { upsert: true}
    )
}



const SPACEX_API_URL = "https://api.spacexdata.com/v4/launchpads";
async function loadLaunchpads() {
  try {
    const response = await axios.get(SPACEX_API_URL);
    const padData = response.data
    for (const pad of padData) {     
        const newLaunchpad = {
            name: pad.name, 
            locality: pad.locality, 
            region: pad.region, 
            launch_attempts: pad.launch_attempts, 
            launch_successes: pad.launch_successes, 
        }
        // console.log(newLaunchpad)
    // await saveLaunchpad(newLaunchpad)
    }
    

  } catch (error) {
    console.error(error)
  }
}

const getAllLaunchPads = async () => {
  const launchPads = await LaunchpadsModel.find({});
  return launchPads;
};

module.exports = {
  saveLaunchpad,
  loadLaunchpads,
  getAllLaunchPads,
};
