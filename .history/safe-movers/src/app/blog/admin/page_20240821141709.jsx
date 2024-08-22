'use client';

import { useState } from 'react';

export default function Upload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [contentSections, setContentSections] = useState([
    { heading: '', text: '', imageUrl: '' },
  ]);

  const handleAddSection = () => {
    setContentSections([
      ...contentSections,
      { heading: '', text: '', imageUrl: '' },
    ]);
  };

  const handleSectionChange = (index, field, value) => {
    const newSections = [...contentSections];
    newSections[index][field] = value;
    setContentSections(newSections);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('contentSections', JSON.stringify(contentSections));

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert('Blog post uploaded successfully!');
      } else {
        alert('Error uploading blog post');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error uploading blog post');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">Upload New Blog Post</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Content Sections</h2>
          {contentSections.map((section, index) => (
            <div key={index}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Heading
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  value={section.heading}
                  onChange={(e) =>
                    handleSectionChange(index, 'heading', e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Text
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  value={section.text}
                  onChange={(e) =>
                    handleSectionChange(index, 'text', e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  value={section.imageUrl}
                  onChange={(e) =>
                    handleSectionChange(index, 'imageUrl', e.target.value)
                  }
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleAddSection}
          >
            Add Content Section
          </button>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Upload Blog Post
        </button>
      </form>
    </div>
  );
}
