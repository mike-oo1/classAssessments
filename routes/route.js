const {
    
    newResturant,
    getResturant,
    updateContact,
    deleteContact
} = require('../controllers/controller')
const {
    newReference,
    getReference,
    updateReference,
    deleteReference
} = require('../controllers/referencedController')
const express = require('express')
const router = express.Router()

router.get('/book')
router.get('/get/:id', getResturant)
router.post('/create', newResturant)
router.put('/update/:id', updateContact)
router.delete('/book/:id', deleteContact)


// route for references
router.post('/reference/:id', newReference)
router.get('/reference/:id', getReference)
router.put('/reference/:id', updateReference)
router.delete('/:resturantId/reference/:referenceId', deleteReference)

module.exports = router