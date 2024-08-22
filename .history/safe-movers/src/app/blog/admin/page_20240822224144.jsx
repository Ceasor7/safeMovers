'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    heading: '',
    contentText: '',
  });
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    // Fetch the saved data on component mount
    axios
      .get('http://localhost:5000/api/data')
      .then((response) => setSavedData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/save', formData)
      .then((response) => {
        if (response.data.success) {
          setSavedData([...savedData, formData]);
          setFormData({
            title: '',
            description: '',
            heading: '',
            contentText: '',
          });
        }
      })
      .catch((error) => console.error('Error saving data:', error));
  };

  return (
    <div className=" mx-auto max-w-4xl">
      <form onSubmit={handleSubmit}>
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Content Text: </label>
          <input
            type="text"
            name="contentText"
            value={formData.contentText}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Save</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {savedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
