const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

app.post('/api/save', upload.single('image'), (req, res) => {
  const { title, description, heading, contentText } = req.body;
  const image = req.file ? req.file.filename : null;
  const data = { title, description, heading, contentText, image };

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
        res.status(200).json({ success: true, savedItem: data });
      }
    );
  });
});

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
