import React from 'react';
import useBanner from '../../../hooks/useBanner';
import { toast } from 'react-toastify'; // For showing success or error messages
import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS

function ManageBanner() {
  const [bannerData, refetch] = useBanner(); // Fetch banner data

  // Handle deleting an individual image
  const handleDeleteImage = async (bannerId, imageUrl) => {
    try {
      const response = await fetch(`http://localhost:5000/banners/${bannerId}/image`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl }) // Send the imageUrl to be deleted
      });

      const data = await response.json(); // Parse response as JSON

      if (response.ok) {
        toast.success('ইমেজ সফলভাবে ডিলিট হয়েছে!');
        refetch(); // Refetch the data after deletion
      } else {
        toast.error(data.message || 'ইমেজ ডিলিট করতে ব্যর্থ');
      }
    } catch (error) {
      toast.error('ইমেজ ডিলিট করতে সমস্যা হয়েছে!');
    }
  };

  // Handle deleting an entire banner (all images)
  const handleDeleteBanner = async (bannerId) => {
    try {
      const response = await fetch(`http://localhost:5000/banners/${bannerId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json(); // Parse response as JSON

      if (response.ok) {
        toast.success('ব্যানার সফলভাবে ডিলিট হয়েছে!');
        refetch(); // Refetch the data after deletion
      } else {
        toast.error(data.message || 'ব্যানার ডিলিট করতে ব্যর্থ');
      }
    } catch (error) {
      toast.error('ব্যানার ডিলিট করতে সমস্যা হয়েছে!');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Banner Images</h2>

      {/* Check if bannerData exists and has items */}
      {bannerData && bannerData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bannerData.map((banner, bannerIndex) => (
            <div key={bannerIndex} className="border p-4">
              <h3>Banner {bannerIndex + 1}</h3>

              {/* Delete Button for Entire Banner */}
              <button
                onClick={() => handleDeleteBanner(banner._id)}  // Delete the entire banner
                className="btn btn-error text-white btn-sm mb-4"
              >
                Delete Entire Banner
              </button>

              {/* Iterate over the images array within each banner */}
              {banner.images && banner.images.length > 0 ? (
                banner.images.map((image, index) => (
                  <div key={index} className="mb-4 relative overflow-hidden">
                    {/* Display the image */}
                    <img
                      src={image.imageUrl}
                      alt={`Banner ${bannerIndex + 1} - Image ${index + 1}`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="mt-2">{`Image ${index + 1}`}</p>

                    {/* Delete Button for Individual Image */}
                    {/* <button
                      onClick={() => handleDeleteImage(banner._id, image.imageUrl)}  // Delete individual image
                      className="absolute top-2 right-2 text-red-500 bg-white p-1 rounded-full shadow-md hover:bg-red-500 hover:text-white"
                    >
                      Delete Image
                    </button> */}
                  </div>
                ))
              ) : (
                <p>No images available for this banner.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No banners available.</p>
      )}
    </div>
  );
}

export default ManageBanner;
