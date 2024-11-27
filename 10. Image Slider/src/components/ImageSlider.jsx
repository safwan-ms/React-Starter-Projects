import React, { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const ImageSlider = ({ url }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  //Fetching Images
  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
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
  console.log(images);
  if (errorMsg !== null) {
    return (
      <h1 className="flex items-center justify-center w-screen h-screen text-2xl text-red-600">
        Something Went wrong Check your connection...!
      </h1>
    );
  }
  if (loading) {
    return (
      <h1 className="flex items-center justify-center w-screen h-screen text-2xl text-red-600">
        Loading Please Wait
      </h1>
    );
  }
  return (
    <div className="container">
      {images.length && images
        ? images.map((imageItem, index) => {
            return (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hidden"
                }
              />
            );
          })
        : null}
      <BsArrowLeftCircle className="arrow arrow-left" onClick={handlePrev} />
      <BsArrowRightCircle className="arrow arrow-right" onClick={handleNext} />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
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
