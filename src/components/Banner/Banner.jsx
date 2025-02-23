import { GoArrowUpRight } from "react-icons/go";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Swiper Modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useBanner from "../../hooks/useBanner";

const Banner = () => {
  const [imagesB, refetch] = useBanner(); // Fetching Data from API

  // ✅ Extracting Image URLs correctly
  const imageUrls =
    imagesB && Array.isArray(imagesB)
      ? imagesB.flatMap((item) =>
          item.images ? item.images.map((img) => img.imageUrl) : []
        )
      : [];

  console.log("✅ Extracted Image URLs:", imageUrls); // Debugging Purpose

  return (
    <div
      id="home"
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/lilac-acrylic-texture-background-wallpaper_53876-104015.jpg?t=st=1740202514~exp=1740206114~hmac=6cf7699c2949083ff099e53ff79f17741326f332aeab8a2eeeae8488d2ddbbd0&w=1060')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 pb-16 pt-24 sm:pt-36 lg:pb-44  lg:pt-56 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left py-18 lg:py-0 mb-8 md:mb-0">
          <h1 className="lg:text-5xl text-4xl font-bold md:font-extrabold mb-6 leading-tight">
            CODE NEXUS
            <br />
            <span className="text-[#422AD5]">
              <Typewriter
                words={["FOR CODE NEXUS FOR"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-500">
            ম্যাচ 3 গেমটি এই আশ্চর্যজনক গেমটি খেলে আপনার মোবাইল ফোন থেকে অর্থ উপার্জন করার জন্য। এখনই ডাউনলোড করুন!
          </p>
          <button className="btn btn-primary px-10 py-4 rounded-full flex items-center gap-2 mx-auto md:mx-0">
            DOWNLOAD APK <GoArrowUpRight className="text-2xl" />
          </button>
        </div>

        {/* Right Side - Swiper Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          {imageUrls.length > 0 ? (
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000, // ✅ Change slides every 2 seconds
                disableOnInteraction: false, // Even if user interacts, autoplay continues
              }}
              modules={[Autoplay]} // ✅ Correctly added Autoplay Module
              className="max-w-xs md:max-w-md"
            >
              {imageUrls.map((url, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={url}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto rounded-lg "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-500">No images available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
