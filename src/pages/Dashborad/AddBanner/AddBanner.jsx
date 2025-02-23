import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBanner() {
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImageFiles([...e.target.files]); // Store multiple images
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageFiles.length === 0) {
      toast.error('Please select images');
      return;
    }

    setLoading(true);

    try {
      const uploadedImages = [];

      for (const imageFile of imageFiles) {
        const formData = new FormData();
        formData.append('image', imageFile);

        const apiKey = '9e0c792ec996a592b128e8421f7d10d2'; // Replace with your actual API key

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          const imageUrl = data.data.url; // Get the image URL

          // Add the image URL to the uploadedImages array
          uploadedImages.push({
            imageUrl,
          });
        } else {
          toast.error('Failed to upload image.');
          setLoading(false);
          return;
        }
      }

      // Once all images are uploaded, send the data to your backend
      const response = await fetch('http://localhost:5000/imagesB', {
        method: 'POST',
        body: JSON.stringify({ images: uploadedImages }),
        headers: { 'Content-Type': 'application/json' },
      });

      const backendData = await response.json();

      if (response.ok) {
        toast.success('Images uploaded and data sent successfully!');
        console.log('Backend Response:', backendData);
      } else {
        toast.error('Failed to send data to the backend.');
      }

    } catch (error) {
      toast.error('An error occurred while uploading the images.');
    } finally {
      setLoading(false);
    }

    // Reset the form fields
    setImageFiles([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Upload Images</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Files Upload Field */}
        <div>
          <label htmlFor="imageFiles" className="block text-sm font-medium text-gray-700">
            Select Images (You can select multiple)
          </label>
          <input
            type="file"
            id="imageFiles"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            multiple
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Uploading Images...' : 'Upload Images'}
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default AddBanner;
