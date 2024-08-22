'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Home() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    heading: '',
    contentText: '',
  });
  const [image, setImage] = useState(null);
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    // Fetch the saved data on component mount
    axios
      .get('http://localhost:5000/api/data')
      .then((response) => setSavedData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleContentChange = (value) => {
    setFormData({ ...formData, contentText: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('heading', formData.heading);
    data.append('contentText', formData.contentText);
    data.append('image', image);

    axios
      .post('http://localhost:5000/api/save', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.data.success) {
          setSavedData([...savedData, response.data.savedItem]);
          setFormData({
            title: '',
            description: '',
            heading: '',
            contentText: '',
          });
          setImage(null);
        }
      })
      .catch((error) => console.error('Error saving data:', error));
  };

  return (
    <div className="mx-auto max-w-4xl">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title Image: </label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <h2 className="text-lg space-y-4 font-bold">Content Sections</h2>
        <div>
          <label>Heading: </label>
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label>Content Text: </label>
          <ReactQuill
            theme="snow"
            value={formData.contentText}
            onChange={handleContentChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>

      <table className="mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Heading</th>
            <th>Content Text</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {savedData.map((data, index) => (
            <tr key={index}>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>{data.heading}</td>
              <td dangerouslySetInnerHTML={{ __html: data.contentText }} />
              <td>
                {data.image && (
                  <img
                    src={`http://localhost:5000/uploads/${data.image}`}
                    alt="Uploaded"
                    className="w-20 h-20 object-cover"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
