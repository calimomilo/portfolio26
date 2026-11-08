// server.js
import express from 'express'
import path from 'path'
import serveStatic from 'serve-static'
import process from 'process'

const app = express()
app.use(serveStatic(path.dirname + '/dist'))
var port = process.env.PORT || 3000
var hostname = 'camilo.perplexus.ch'

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
