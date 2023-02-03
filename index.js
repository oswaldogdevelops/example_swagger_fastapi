const express = require('express')
const app = express()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const port = '3000'

app.use(cookieParser())
//app.use(session())
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })