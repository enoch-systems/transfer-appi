const express = require('express')
const transferRoutes = require('./routes/transferRoutes')

const app = express()

app.use(express.json())
app.use('/api', transferRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Transfer API running on port ${PORT}`)
})