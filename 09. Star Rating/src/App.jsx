import React from "react";
import StarRating from "./components/StarRating";

const App = () => {
  const noOfStars = 10;
  return (
    <div>
      <StarRating noOfStars={noOfStars} />
    </div>
  );
};

export default App;
