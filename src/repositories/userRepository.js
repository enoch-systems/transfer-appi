const fs = require('fs')               // 📁 Opay's file cabinet (read/write files)
const path = require('path')           // 🧭 file path helper

const dbPath = path.join(__dirname, '../data/db.json') // 🗄️ master customer ledger file

function getAll() {
  const data = fs.readFileSync(dbPath, 'utf-8')    // 📂 open ledger and read all customers
  return JSON.parse(data).users                     // 📋 return the customer list
}

function findById(id) {
  const users = getAll()                             // 🔍 get all customers
  return users.find(user => user.id === id)          // 🔎 find customer by their Opay ID
}

function updateBalance(id, newBalance) {
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))  // 📂 open ledger
  data.users = data.users.map(user => 
    user.id === id ? { ...user, balance: newBalance } : user  // ✏️ update that customer's balance
  )
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))     // 💾 save ledger back to cabinet
}

module.exports = { findById, updateBalance }                  // 📤 export the DB tools