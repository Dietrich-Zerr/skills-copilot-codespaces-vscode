// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = require('./comments.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

app.post('/comments', (req, res) => {
  const { body } = req;
  comments.addComment(body);
  res.send(comments.getComments());
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});