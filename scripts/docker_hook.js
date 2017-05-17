var request = require('request')
var _uri = 'https://registry.hub.docker.com/u/onebytecode/mainweb/trigger/26624aaa-6186-4dbc-b136-9cea1f93a1e2/'
console.log('Hoocking');
request({
  method: 'POST',
  uri: _uri,
  multipart: [
      {
        'content-type': 'application/json',
        body: JSON.stringify({})
      }
    ],
})
