const express = require('express')
const app = express()
const port = 3000
const connectdb = require('./database/connectdb')
const web = require ('./routes/web')
var cors = require('cors')


//connect db
connectdb()

app.use(express.json());

app.use(cors({
      origin:"http://localhost:5173",
      credentials:true
  }));


//route load localhost:3000/api
app.use('/api',web)



app.listen(port, () => {
  console.log(`server start localhost: ${port}`)
}) 