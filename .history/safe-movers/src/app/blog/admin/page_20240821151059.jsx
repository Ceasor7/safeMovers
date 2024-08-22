import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '' });
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
          setFormData({ name: '', email: '' });
        }
      })
      .catch((error) => console.error('Error saving data:', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
