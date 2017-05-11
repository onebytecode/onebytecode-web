var request = require('request')
var _uri = 'https://registry.hub.docker.com/u/devpalsorg/musicconnects-web/trigger/6729851e-7695-44d4-9260-da8ddb10c956/'
console.log('Hoocking');
request({
  method: 'POST',
  uri: _uri,
  multipart: [
      {
        'content-type': 'application/json',
        body: JSON.stringify({ source_type: 'Branch', source_name: 'jam' })
      }
    ],
})
