import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBanner() {
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [description, setDescription] = useState('');
  const [imageLink, setImageLink] = useState('');

  const handleImageLinkChange = (e) => {
    setImageLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here, you can handle the form submission, e.g., sending data to the backend
    console.log('Banner Data:', { title1, title2, description, imageLink });

    // Reset the form fields
    setTitle1('');
    setTitle2('');
    setDescription('');
    setImageLink('');

    // Show success toast
    toast.success('Banner added successfully!');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add Banner</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title 1 Field */}
        <div>
          <label htmlFor="title1" className="block text-sm font-medium text-gray-700">
            Title 1
          </label>
          <input
            type="text"
            id="title1"
            value={title1}
            onChange={(e) => setTitle1(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Title 2 Field */}
        <div>
          <label htmlFor="title2" className="block text-sm font-medium text-gray-700">
            Title 2
          </label>
          <input
            type="text"
            id="title2"
            value={title2}
            onChange={(e) => setTitle2(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
            rows="4"
          />
        </div>

        {/* Image Link Field */}
        <div>
          <label htmlFor="imageLink" className="block text-sm font-medium text-gray-700">
            Image Link
          </label>
          <input
            type="text"
            id="imageLink"
            value={imageLink}
            onChange={handleImageLinkChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Add Banner
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default AddBanner;
