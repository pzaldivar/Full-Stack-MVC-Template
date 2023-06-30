const express = require("express")
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit) //Get Edit page w/item id to edit
router.get('/remove/:id', editController.deleteItem) //deletes item
router.post('/update/:id', editController.updateItem) //updates item using data passed in from form

module.exports = router