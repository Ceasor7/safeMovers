const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public folder
app.use(express.static('public'));

// Set up Multer storage configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// API route to handle form submission
app.post('/api/upload', upload.single('image'), (req, res) => {
  const { title, description, contentSections } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

  // Create a new blog post object
  const newBlogPost = {
    title,
    description,
    imageUrl,
    contentSections: JSON.parse(contentSections),
  };

  // Path to the JSON database file
  const dbPath = path.join(__dirname, 'public', 'blogPosts.json');

  // Read existing blog posts
  let blogPosts = [];
  if (fs.existsSync(dbPath)) {
    blogPosts = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  }

  // Add the new blog post to the array
  blogPosts.push(newBlogPost);

  // Write the updated blog posts array to the JSON file
  fs.writeFileSync(dbPath, JSON.stringify(blogPosts, null, 2));

  // Send response
  res
    .status(200)
    .json({
      message: 'Blog post uploaded successfully!',
      blogPost: newBlogPost,
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
