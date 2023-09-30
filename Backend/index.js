const express = require('express')
const app = express()
const port = 5000
const connectDB = require('./db')
connectDB();
const cors = require('cors');




app.use(cors());
app.use(express.json())

app.use('/api',require("./Routes/CreateUser"))
app.listen(port, () => {
  console.log(`Listening on our fav song ${port}`)
})