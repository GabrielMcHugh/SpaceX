const express = require('express')

const starlinkController = require('../controllers/starlink.controller')

const starlinkRouter = express.Router()

starlinkRouter.get('/', starlinkController.getStarlinks)

module.exports = starlinkRouter