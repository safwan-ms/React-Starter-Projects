import React from "react";
import "../style.css";
import { useState } from "react";

const testimonials = [
  {
    quote: "This is the best product I've ever used!",
    author: "Jane Doe",
  },
  {
    quote: "I highly recommend this product to everyone!",
    author: "John Smith",
  },
  {
    quote: "This product has completely changed my life!",
    author: "Bob Johnson",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial(
      (currentTestimonial + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNext = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };
  return (
    <div className="testimonials">
      <h2 className="testimonials-quote">
        {testimonials[currentTestimonial].quote}
      </h2>
      <p className="testimonials-author">
        -{testimonials[currentTestimonial].author}
      </p>
      <div className="testimonials-nav">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
