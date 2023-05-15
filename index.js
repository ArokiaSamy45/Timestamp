const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'Timestamp');

// Create the 'Timestamp' folder if it doesn't exist
fs.mkdir(folderPath, { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  }
});

app.post('/createFile', (req, res) => {
  const fileName = `${new Date().toISOString().replace(/:/g, '-')}.txt`;
  const filePath = path.join(folderPath, fileName);
  const fileContent = new Date().toString();

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('File created successfully');
    }
  });
});

app.get('/getAllFiles', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const textFiles = files.filter((file) => path.extname(file) === '.txt');
      res.status(200).send(textFiles);
    }
  });
});

