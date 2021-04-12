/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { fetchPhotos, openUploadWidget } from '../utils/CloudinaryService';

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UNSIGNED_UPLOAD_PRESET;

function UploadImageTwo() {
  const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName,
      tags: [tag, 'anImage'],
      uploadPreset,
      folder: 'e-palengke/test',
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === 'success') {
          setImages([...images, photos.info.public_id]);
        }
      } else {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    fetchPhotos('e-palengke', setImages);
  }, []);

  return (
    <CloudinaryContext cloudName={cloudName}>
      <div className="App">
        <button type="button" onClick={() => beginUpload('image')}>Upload Image</button>
        <section>
          {images.map((i) => (
            <Image
              key={i}
              publicId={i}
              fetch-format="auto"
              quality="auto"
            />
          ))}
        </section>
      </div>
    </CloudinaryContext>
  );
}

export default UploadImageTwo;
