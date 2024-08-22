const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Directory to save the JSON data
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Save form data to a JSON file
app.post('/api/save', (req, res) => {
  const { name, email } = req.body;
  const data = { name, email };

  fs.readFile(path.join(dataDir, 'data.json'), 'utf8', (err, fileData) => {
    let jsonData = [];
    if (!err && fileData) {
      jsonData = JSON.parse(fileData);
    }
    jsonData.push(data);

    fs.writeFile(
      path.join(dataDir, 'data.json'),
      JSON.stringify(jsonData, null, 2),
      (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to save data' });
        }
        res.status(200).json({ success: true });
      }
    );
  });
});

// Fetch saved data
app.get('/api/data', (req, res) => {
  fs.readFile(path.join(dataDir, 'data.json'), 'utf8', (err, fileData) => {
    if (err || !fileData) {
      return res.status(500).json({ error: 'Failed to read data' });
    }
    res.status(200).json(JSON.parse(fileData));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
