import express from 'express';
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('/public/index.html');
});

app.listen(5000, function() {
  console.log('App listening on port 5000!');
});
