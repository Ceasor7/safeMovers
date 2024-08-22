import { useState } from 'react';

export default function Admin() {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    image: '',
    content: [{ heading: '', text: '', image: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContentChange = (index, e) => {
    const { name, value } = e.target;
    const updatedContent = [...formData.content];
    updatedContent[index][name] = value;
    setFormData({ ...formData, content: updatedContent });
  };

  const addContentSection = () => {
    setFormData({
      ...formData,
      content: [...formData.content, { heading: '', text: '', image: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch existing blog data
    fetch('/blogData.json')
      .then((response) => response.json())
      .then((data) => {
        const updatedData = [...data, formData];
        // Save updated data to local storage (for demo purposes)
        localStorage.setItem('blogData', JSON.stringify(updatedData));
        alert('Blog post added successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Add New Blog Post</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ID
          </label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        {formData.content.map((section, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold mb-2">
              Content Section {index + 1}
            </h3>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Heading
              </label>
              <input
                type="text"
                name="heading"
                value={section.heading}
                onChange={(e) => handleContentChange(index, e)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Text
              </label>
              <textarea
                name="text"
                value={section.text}
                onChange={(e) => handleContentChange(index, e)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL (optional)
              </label>
              <input
                type="text"
                name="image"
                value={section.image}
                onChange={(e) => handleContentChange(index, e)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addContentSection}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        >
          Add Content Section
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
