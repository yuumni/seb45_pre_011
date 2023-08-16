const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors()); // CORS 설정
app.use(bodyParser.json());
const posts = [];

app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.post('/api/members', (req, res) => {
  const { username, email, password } = req.body;
  const newAccount = { username, email, password };
  posts.push(newAccount);
  res.status(201).json(newAccount);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
