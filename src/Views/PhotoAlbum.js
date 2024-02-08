import React, { useState, useEffect } from "react";
import { PHOTO_GALLERY_IMAGES } from "../constants";

const Photo = ({ img }) => {
  return (
    <div className="col-lg-6 col-md-6 p-2 m-0">
      <img className="rounded" src={img} width="100%" height="auto" alt="" />
    </div>
  );
};

export const PhotoAlbum = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        PHOTO_GALLERY_IMAGES.map((img) => {
          return new Promise((resolve) => {
            const loadImg = new window.Image();
            loadImg.src = img;
            loadImg.onload = () => resolve();
          });
        })
      );
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  return (
    <div className="image-gallery mt-4 container content p-2">
      <h1 className="text-center mt-5">Galleri</h1>
      <div
        className="row p-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {imagesLoaded ? (
          PHOTO_GALLERY_IMAGES.map((img, index) => (
            <Photo key={index} img={img} />
          ))
        ) : (
          <div className="row" style={{ width: "100%" }}>
            {Array(10)
              .fill()
              .map((_, index) => (
                <div className="col-lg-6 col-md-6 p-2 m-0" key={index}>
                  <div className="skeleton"></div>
                </div>
              ))}
          </div>
        )}
      </div>
      <p className="text-center">
        {" "}
        Fotograf:{" "}
        <a href="https://www.instagram.com/sarajosefin_fotografi_/">
          Josefin Hasselberg
        </a>
      </p>
    </div>
  );
};
