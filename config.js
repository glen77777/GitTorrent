module.exports = require('rc')('gittorrent', {
  dht: {
    bootstrap: [
      '192.168.174.128:6881'
    ],
    listen: 6881,
    announce: 30000
  },
  key: 'ed25519.key'
})
