const express = require('express')
//we can also use(import express from "express")
const app = express()// express object
const port = 4000

app.get('/', (req, res) => {
  res.send('Helloo World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})