const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/listFiles', (req, res) => {
  const directoryPath = path.join(__dirname, 'content');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send({ message: 'Unable to scan directory' });
    } else {
      res.send({ files });
    }
  });
});

app.get('/getFile/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, 'content', fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Error reading file' });
    } else {
      res.send({ content: data });
    }
  });
});

app.post('/saveMarkdown', (req, res) => {
  const { markdown, fileName } = req.body;
  const filePath = path.join(__dirname, 'content', fileName);
  fs.writeFile(filePath, markdown, (err) => {
    if (err) {
      res.status(500).send({ message: 'Error writing file' });
    } else {
      res.send({ message: 'Markdown saved successfully' });
    }
  });
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
