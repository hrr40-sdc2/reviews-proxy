const newrelic = require('newrelic');
const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware')
const port = 3030;

app.use(express.static('./client'));

var nearbyProxy = proxy('/api/', {target: 'http://localhost:3000/'});
var descriptionProxy = proxy('/movies/', {target: 'http://localhost:4000/'});
app.use(nearbyProxy);
app.use(descriptionProxy);
var reviewsProxy = proxy('/', {target: 'http://localhost:5000/'});
app.use(reviewsProxy);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
