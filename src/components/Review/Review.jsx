// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

// Import ReactStars
import ReactStars from "react-rating-stars-component";


function Review() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Mahidi Shikder",
      review: "Lorem ipsum dolor sit amet.",
      rating: 5,
      image:
        "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
    },
    {
      id: 2,
      name: "John Doe",
      review: "Excellent experience, highly recommend!",
      rating: 4.5,
      image:
        "https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=",
    },
    {
      id: 3,
      name: "Jane Smith",
      review: "Absolutely loved it! Great service.",
      rating: 4,
      image:
        "https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=",
    },
  ]);

  return (
    <div id="review" className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Are Saying
        </h2>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="p-4 bg-slate-300 rounded text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <h2 className="text-xl font-semibold mt-2">{review.name}</h2>
                <p className="text-gray-500">{review.review}</p>
                <ReactStars
                  count={5}
                  value={Math.round(review.rating)} // Ensure integer rating
                  edit={false}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
         <div>
          
         </div>
        
      </div>
    </div>
  );
}

export default Review;
