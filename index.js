const express = require('express')
const path = require('path')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '61e8c1e70f5b40c3ba32e5afa250c284',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const app = express()
app.use(express.json)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"))
})

app.use(rollbar.errorHandler())
rollbar.log('hello world')
const port = process.env.PORT || 4545
app.listen(port, () => console.log(`port ${port} up`))