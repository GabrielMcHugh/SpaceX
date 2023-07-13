const express = require('express')
const { getAllLaunchpads, getIndividualLaunchpad, postLaunchpads, deleteLaunchpads, patchLaunchpads  } = require('./launchpads.controller')

const launchpadsRouter = express.Router()

launchpadsRouter.get('/', getAllLaunchpads);
launchpadsRouter.get('/:launchpadId', getIndividualLaunchpad);
launchpadsRouter.post('/', postLaunchpads);
launchpadsRouter.delete('/', deleteLaunchpads);
launchpadsRouter.patch('/', patchLaunchpads)

module.exports = launchpadsRouter