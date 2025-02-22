import React, { useState } from 'react';

function UserReview() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleNameChange = (e) => setName(e.target.value);
  const handleReviewChange = (e) => setReview(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);

  const handleSubmit = () => {
    alert(`Name: ${name}\nReview: ${review}\nRating: ${rating} stars`);
  };

  return (
    <div className="max-w-sm bg-gray-100 mx-auto p-4 mt-10 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Your Feedback</h2>

      <div className="mb-3">
        <label className="block text-gray-600 font-medium mb-1">Name:</label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={handleNameChange} 
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      <div className="mb-3">
        <label className="block text-gray-600 font-medium mb-1">Review:</label>
        <textarea 
          placeholder="Write your review" 
          value={review} 
          onChange={handleReviewChange} 
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none text-sm"
        />
      </div>

      <div className="mb-3">
        <label className="block text-gray-600 font-medium mb-1">Rating:</label>
        <select 
          value={rating} 
          onChange={handleRatingChange} 
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <button 
        onClick={handleSubmit} 
        className="w-full btn btn-primary"
      >
        Submit Review
      </button>
    </div>
  );
}

export default UserReview;
