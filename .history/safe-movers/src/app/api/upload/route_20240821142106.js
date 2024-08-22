export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;

      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        res
          .status(response.status)
          .json({ message: 'Error uploading blog post' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
