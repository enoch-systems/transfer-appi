const express = require('express')          // 📲 import express engine
const router = express.Router()             // 📘 Transfer Manual booklet
const transferService = require('../services/transferService') // 💰 money backend team
const userRepository = require('../repositories/userRepository') // 🗄️ customer database

// GET /balance/:userId — check a user's balance
router.get('/balance/:userId', (req, res) => {
  const user = userRepository.findById(req.params.userId) // 🔍 look up user by ID
  if (!user) return res.status(404).json({ error: 'User not found' }) // ❌ no user
  res.json({ name: user.name, balance: user.balance }) // ✅ show name + balance
})

// POST /transfer — send money
router.post('/transfer', (req, res) => {
  try {
    const result = transferService.execute(req.body) // 💸 process transfer
    res.json(result)                                 // ✅ success
  } catch (error) {
    res.status(400).json({ error: error.message })   // ❌ error (insufficient balance, wrong PIN, etc.)
  }
})

module.exports = router                             // � give Transfer Manual back to main app