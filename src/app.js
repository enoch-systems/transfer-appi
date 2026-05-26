const express = require('express')          // 📲 download Opay engine
const transferRoutes = require('./routes/transferRoutes') // 📘 Transfer Manual

const app = express()                       // 🚀 launch Opay app

app.use(express.json())                     // 🧑‍💼 front desk: understand money data
app.use('/api', transferRoutes)             // 🔀 /api customers → Transfer Dept.

const PORT = 3000                           // 🏪 service counter #3000
app.listen(PORT, () => {
  console.log(`Transfer API running on port ${PORT}`) // � "Opay is open!"
})