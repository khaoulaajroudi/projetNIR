const express = require('express')
const connectDB = require('./dbconnect')
const app = express()


//connect to DB
connectDB()

//routes
app.use(express.json())


app.use('/boutique', require('./boutique'))
app.use('/article', require('./article'))
app.use('/panier', require('./panier'))
app.use('/commande', require('./commande'))
//server

app.listen(5000, (err) =>
  err ? console.log(err) : console.log(`server is running on 5000`)
)
