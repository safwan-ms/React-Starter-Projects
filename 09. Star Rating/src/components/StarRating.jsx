import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={
                index <= rating ? "text-yellow-500 mr-5" : "text-black mr-5"
              }
              onClick={() => handleClick(index)}
              key={index}
              size={40}
            />
          );
        })}
        <button
          onClick={() => setRating(0)}
          className="px-5 py-3 text-lg font-bold text-white bg-red-700 rounded-md"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default StarRating;
