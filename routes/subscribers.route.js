const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber.models')

// Getting all
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getSubscriber, (req, res) => {
  res.json(res.subscriber)
})

// Creating one
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    matricule: req.body.matricule,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  })
  
  try {
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getSubscriber, async (req, res) => {
  if (req.body.matricule != null) {
    res.subscriber.matricule = req.body.matricule
  }
  if (req.body.lastName != null) {
    res.subscriber.lastName = req.body.lastName
  }
  if (req.body.firstName != null) {
    res.subscriber.firstName = req.body.firstName
  }
  if (req.body.email != null) {
    res.subscriber.email = req.body.email
  }
  if (req.body.phone != null) {
    res.subscriber.phone = req.body.phone
  }
  if (req.body.name != null) {
    res.subscriber.name = req.body.name
  }
  try {
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove()
    res.json({ message: 'Deleted Subscriber' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getSubscriber(req, res, next) {
  let subscriber
  try {
    subscriber = await Subscriber.findById(req.params.id)
    if (subscriber == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.subscriber = subscriber
  next()
}

module.exports = router