import React from 'react';
import useReview from '../../../hooks/useReview'; // Assuming you have the custom hook for fetching reviews
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ManageReview() {
  const [reviews, refetch] = useReview(); // Fetch reviews from the custom hook

  const handleDelete = async (id) => {
    try {
      // Call the API to delete the review
      const response = await fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json(); // Parse the response as JSON

      if (response.ok) {
        // Show success toast if the deletion is successful
        toast.success('Review deleted successfully!');
        refetch(); // Refetch reviews to update the list
      } else {
        // Show error toast if there was an issue
        toast.error(data.message || 'Failed to delete review.');
      }
    } catch (error) {
      // Show error toast if there's an error in the fetch request
      toast.error('An error occurred while deleting the review.');
    }
  };

  return (
    <div>
      <h2>Manage Reviews</h2>
      {/* Show reviews in a list */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {reviews.map((review) => (
          <li key={review._id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <img src={review.image} alt={review.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            </div>
            <div style={{ flex: 1 }}>
              <p><strong>Name:</strong> {review.name}</p>
              <p><strong>Text:</strong> {review.text}</p>
              <p><strong>Rating:</strong> {review.rating}</p>
            </div>
            <button
              onClick={() => handleDelete(review._id)}  // Call the delete function
              style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageReview;
