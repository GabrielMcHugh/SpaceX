const express = require("express");
const {
  httpGetAllLaunchpads,
  httpGetIndividualLaunchpad,
  httpPostLaunchpads,
  httpDeleteLaunchpads,
  httpPatchLaunchpads,
} = require("./launchpads.controller");

const launchpadsRouter = express.Router();

launchpadsRouter.get("/", httpGetAllLaunchpads);
launchpadsRouter.get("/:launchpadId", httpGetIndividualLaunchpad);
launchpadsRouter.post("/", httpPostLaunchpads);
launchpadsRouter.delete("/", httpDeleteLaunchpads);
launchpadsRouter.patch("/", httpPatchLaunchpads);

module.exports = launchpadsRouter;
