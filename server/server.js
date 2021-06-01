// import modules for use later
const express = require("express")
const cors = require("cors")

// set up config for using env variables
require("dotenv").config({ path: "./config.env"})

// initialize express server and port
const app = express()
const port = process.env.PORT || 3000

// sets up CORS for Cross-Origin-Resource-Sharing
app.use(cors())
// converts API responses to JSON for easy use
app.use(express.json())
// creates a route where we can interact with our record API
app.use(require("./routes/record"))

// initializes database
const dbo = require("./db/conn")

// set up server listening for port and databse
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err)
  })
  console.log(`Server is running on port: ${port}`)
})
