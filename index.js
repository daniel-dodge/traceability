const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 4545
app.listen(port, () => console.log(`port ${port} up`))