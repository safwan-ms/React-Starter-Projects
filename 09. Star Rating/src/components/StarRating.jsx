import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleClear = () => {
    setRating(0);
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            className={index <= rating ? "text-yellow-500" : "text-black"}
            size={40}
          />
        );
      })}
      <button
        onClick={() => handleClear()}
        className="py-3 text-lg font-bold text-white bg-red-600 border-none rounded-full px-7"
      >
        Clear
      </button>
    </div>
  );
};

export default StarRating;
