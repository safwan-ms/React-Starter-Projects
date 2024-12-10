import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e);
      setLoading(false);
    }
  };
  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  if (errorMsg !== null) {
    return <h1> Something went wrong make sure you are connected...</h1>;
  }
  if (loading) {
    return <h1> Loading Please Wait a sec..</h1>;
  }
  console.log(images);
  return (
    <div className="container">
      {images && images.length
        ? images.map(({ download_url, id }, index) => {
            return (
              <img
                key={id}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hidden"
                }
                src={download_url}
                alt={download_url}
              />
            );
          })
        : null}
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrev}
      />
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
