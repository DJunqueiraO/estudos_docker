const express = require("express")
const mangoose = require("mongoose")

const app = express()

// $ docker exec -it 1-mango-1 mongosh -u admin -p admin
mangoose.connect("mongodb://admin:admin@localhost:mongo:27017/?authSource=admin")
  .then(() => {
    console.log("Successfully connected to MongoDB")
  }).catch((err) => {
    console.error("Error connecting to MongoDB:", err)
  })

app.get("/", (req, res) => {
  res.send("<h2>Lero lero!!</h2>")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

