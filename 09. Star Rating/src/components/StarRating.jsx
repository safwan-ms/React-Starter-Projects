import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={40}
            onClick={() => handleClick(index)}
            className={rating >= index ? "text-yellow-600" : "text-black"}
          />
        );
      })}
      <button
        onClick={() => setRating(0)}
        className="px-5 py-3 ml-5 text-xl font-bold text-white bg-red-500 rounded-full"
      >
        Clear
      </button>
    </div>
  );
};

export default StarRating;
