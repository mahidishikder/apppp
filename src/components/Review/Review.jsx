import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { toast } from 'react-toastify';
import useReview from '../../hooks/useReview';
import { AuthContext } from '../../provider/AuthProvider';

// Function to render stars based on rating
const renderStars = (rating) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating); 
};

function Review() {
  const {user} = useContext(AuthContext)
  // console.log(user.photoURL)
  const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZsL6PVn0SNiabAKz7js0QknS2ilJam19QQ&s'
  const photos = user?.photoURL || defaultImage;
  console.log(photos)
  // console.log(user.displayURL)
  const [reviews, refetch] = useReview();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [name, setName] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      text: reviewText,
      name,
      photos,
      rating
    };
  
    try {
      const response = await fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview)
      });
  
      const data = await response.json();
      
      if (data.insertedId) {
        toast.success("Review posted successfully! 🎉");
        setName('');
        setReviewText('');
        setRating(0);
        refetch();
      } else {
        toast.error("Failed to post review! ❌");
      }
  
    } catch (error) {
      console.error("Error posting review:", error);
      toast.error("Something went wrong! ❌");
    }
  };

  return (
    <div id="review" className=''>
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
                <img src={review.photos} alt={`Review ${index + 1}`} className="w-24 h-24 object-cover rounded-full mb-4" />
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
