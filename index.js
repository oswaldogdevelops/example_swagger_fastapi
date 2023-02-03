const express = require('express')
const app = express()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const port = '3000'

app.use(cookieParser())
//app.use(session())
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/categories', require('./routes/categories'))



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })