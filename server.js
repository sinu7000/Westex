const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const tweets = [
  { content: "AI-generated tweet #1" },
  { content: "AI-generated tweet #2" },
  { content: "AI-generated tweet #3" }
];

app.get('/tweets', (req, res) => {
  res.json(tweets);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
