const express = require('express')
const app = express()
var http = require('http').createServer(app)
var Server = require('bittorrent-tracker').Server

var server = new Server({
  filter: function (infoHash, params, cb) {
      // It is possible to block by peer id (whitelisting torrent clients) or by secret
    // key (private trackers).
    var allowed = (infoHash === 'aaa67059ed6bd08362da625b3ae77f6f4a075aaa')
    if (allowed) {
      cb(null)
    } else {
      cb(new Error('disallowed torrent'))
    }
  }
})



app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules'))


app.get('/', (req, res) => {
    res.send("quack quack")
})


http.listen(8765, () => {
    console.log('listening on *:8765')
})
