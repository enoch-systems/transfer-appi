const fs = require('fs')
const path = require('path')

const dbPath = path.join(__dirname, '../data/db.json')

function getAll() {
  const data = fs.readFileSync(dbPath, 'utf-8')
  return JSON.parse(data).users
}

function findById(id) {
  const users = getAll()
  return users.find(user => user.id === id)
}

function updateBalance(id, newBalance) {
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
  data.users = data.users.map(user => 
    user.id === id ? { ...user, balance: newBalance } : user
  )
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))
}

module.exports = { findById, updateBalance }