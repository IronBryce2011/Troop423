import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './gallery.css';
axios.defaults.withCredentials = true;
const BACKEND_URL = 'https://scout-backend-yuyg.onrender.com';

const Gallery = () => {
  const [uploads, setUploads] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0); // carousel index

  useEffect(() => {
    setLoading(true);
    axios.get(`${BACKEND_URL}/api/uploads`)
      .then(res => {
        setUploads(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load uploads');
        setLoading(false);
      });
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % uploads.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + uploads.length) % uploads.length);
  };

  if (loading) {
    return <div className="loading"></div>;
  }

  if (uploads.length === 0) {
    return <p>No photos uploaded yet.</p>;
  }

  return (
    <div className="carousel-container">
      <h2 className="gallery-title">Photos</h2>
      {error && <p className="gallery-error">{error}</p>}

      <div className="carousel">
        <button className="carousel-btn left" onClick={prevSlide}>❮</button>

        <div className="carousel-slide">
          <img
            src={uploads[index].image_path}
            alt={uploads[index].caption}
            className="carousel-image"
          />
          <p className="carousel-caption">{uploads[index].caption}</p>
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>❯</button>
      </div>

      <div className="carousel-dots">
        {uploads.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

