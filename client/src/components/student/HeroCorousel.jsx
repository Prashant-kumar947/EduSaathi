import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Empower Your Future",
      subtitle: "Learn Anytime, Anywhere with Aarambh Eduversity!",
      description: "Discover a wide range of expertly curated online courses across diverse fields like technology, business, personal development, and more.",
      image: "/images/Student with smile.jpg",
    },
    {
      title: "Courses Designed for Success",
      subtitle: "Upskill, Reskill, and Achieve Your Goals!",
      description: "From professional certifications to personal growth, Aarambh Eduversity offers courses tailored for every learner. Gain in-demand skills to stand out in today’s competitive world.",
      image: "/images/Upgrade your life.jpg",
    },
    {
      title: "Learn from the Best",
      subtitle: "Expert Instructors, Engaging Content!",
      description: "Learn from industry leaders and passionate educators through high-quality videos, quizzes, and assignments. Your success is our mission.",
      image: "/images/University STudents Degree.jpg",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative text-white overflow-hidden h-[300px] lg:h-[400px]">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out lg:h-[400px] h-[300px]"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full relative"
            style={{ flex: "0 0 100%" }}
          >
            {/* Slide Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Slide Content */}
            <div className="absolute inset-0 text-[#85132c] flex flex-col justify-evenly text-left p-6 md:p-10">
              <div className="mb-6 px-6 lg:px-[9%]">
                <h1 className="text-2xl md:text-4xl font-bold">{slide.title}</h1>
                <h4 className=" md:text-md font-medium">{slide.subtitle}</h4>
                <p className="text-base md:text-sm w-[60%]">{slide.description}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="relative bottom-24 lg:bottom-56 z-10 flex flex-row space-x-4 md:left-10 px-6 lg:px-[9%]">
              <button className="bg-white text-sm text-[#85132c] hover:text-white px-4 py-3 rounded-md shadow-md font-bold hover:bg-[#85132c] transition duration-300 w-full md:w-auto">
                Explore Courses
              </button>
              <button className="bg-[#85132c] text-sm text-white px-4 py-3 rounded-md shadow-md font-bold hover:bg-[#85132c] transition duration-300 w-full md:w-auto">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-[#85132c]" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-20"
        aria-label="Previous Slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-20"
        aria-label="Next Slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default HeroSection;
