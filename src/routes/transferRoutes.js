const express = require('express')
const router = express.Router()
const transferService = require('../services/transferService')
const userRepository = require('../repositories/userRepository')

// GET /balance/:userId — check a user's balance
router.get('/balance/:userId', (req, res) => {
  const user = userRepository.findById(req.params.userId)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json({ name: user.name, balance: user.balance })
})

// POST /transfer — send money
router.post('/transfer', (req, res) => {
  try {
    const result = transferService.execute(req.body)
    res.json(result)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
