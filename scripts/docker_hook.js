var request = require('request')
var _uri = 'https://registry.hub.docker.com/u/onebytecode/mainweb/trigger/26624aaa-6186-4dbc-b136-9cea1f93a1e2/'

console.log('Hoocking');
request({
    method: 'POST',
    uri: _uri,
    json: {
      "source_type":"Branch",
      "source_name":"develop"
    }

  },
  function (error, response, body) {
    if (error) {
      return console.error('upload failed:', error);
    }
    console.log('Hook successful!  Server responded with:', body);
  })
