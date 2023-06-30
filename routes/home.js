//Handles initial GET request for homepage
//Handles POST method request for adding new items

const express = require("express")
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) //READ
router.post('/new', homeController.createItem) //CREATE

module.exports = router