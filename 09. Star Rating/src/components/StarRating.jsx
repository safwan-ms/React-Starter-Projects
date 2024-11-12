import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const handleClick = (findCurrentIndex) => {
    setRating(findCurrentIndex);
  };
  return (
    <div className="flex justify-center">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            size={40}
            onClick={() => handleClick(index)}
            onMous
            className={index <= rating ? "text-yellow-500" : "text-black"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
