const express = require("express");
const {
  httpGetAllLaunchpads,
  httpGetIndividualLaunchpad,
  httpAddNewLaunchpads,
  httpDeleteLaunchpads,
  httpPatchLaunchpads,
} = require("./launchpads.controller");

const launchpadsRouter = express.Router();

launchpadsRouter.get("/", httpGetAllLaunchpads);
// launchpadsRouter.get("/:launchpadId", httpGetIndividualLaunchpad);
launchpadsRouter.post("/", httpAddNewLaunchpads);
launchpadsRouter.delete("/:launchpadId", httpDeleteLaunchpads);
launchpadsRouter.patch("/", httpPatchLaunchpads);

module.exports = launchpadsRouter;
