const express = require('express')
const app = express()
const port = 5000
const connectDB = require('./db')
connectDB();
const cors = require('cors');

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
//   res.header(
//     "Access-Control-Allow_Headers",
//     "Origin, X-Requested-With,Content-Type, Accept"
//   )
//   next();
// })
app.use(cors());
app.use(express.json())

app.use('/api',require("./Routes/CreateUser"))
app.listen(port, () => {
  console.log(`Listening on our fav song ${port}`)
})