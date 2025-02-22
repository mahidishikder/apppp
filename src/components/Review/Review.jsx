import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import useAxiosPublic from '../../hooks/useAxiosPublic';


// Function to render stars based on rating
const renderStars = (rating) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating); 
};

function Review() {

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [name, setName] = useState('');
  const axiosPublic = useAxiosPublic()
  
  const reviews = [
    {
      text: "This product is amazing! I love how it works and how easy it is to use.",
      name: "John Doe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s",
      rating: 5
    },
    {
      text: "Excellent quality and service. Highly recommend it!",
      name: "Jane Smith",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s",
      rating: 4
    },
    {
      text: "The best purchase I’ve made in a long time. Worth every penny!",
      name: "Mary Johnson",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s",
      rating: 5
    },
    {
      text: "A fantastic product with amazing results. Will buy again!",
      name: "David Williams",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s",
      rating: 3
    }
  ];

  // Handle Rating change
  const handleRatingChange = (value) => {
    setRating(value);
  };

  // Handle Review Text change
  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  // Handle Name change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      text: reviewText,
      name,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s",
      rating
    };
    console.log("Submitted Review:", newReview);
    
    // Reset form
    setName('');
    setReviewText('');
    setRating(0);
  };

  return (
    <div className=''>
      <div className="max-w-screen-lg mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Customer Reviews</h2>

      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={review.image} alt={`Review ${index + 1}`} className="w-24 h-24 object-cover rounded-full mb-4" />
              <p className="text-center text-gray-600 italic mb-2">"{review.text}"</p>
              <p className="text-yellow-500 text-lg mb-2">{renderStars(review.rating)}</p>
              <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-4 text-center">Submit Your Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Rating */}
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                className={`text-2xl ${rating >= value ? 'text-yellow-500' : 'text-gray-300'}`}
                onClick={() => handleRatingChange(value)}
                type="button"
              >
                ★
              </button>
            ))}
          </div>

          {/* Name Input */}
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full p-3 border rounded-md"
            placeholder="Enter your name"
            required
          />

          {/* Review Textarea */}
          <textarea
            value={reviewText}
            onChange={handleReviewTextChange}
            className="w-full p-3 border rounded-md"
            rows="4"
            placeholder="Write your review here..."
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Review;
