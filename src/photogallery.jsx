import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './gallery.css';
axios.defaults.withCredentials = true;

const BACKEND_URL = 'https://scout-backend-yuyg.onrender.com';

const PhotoGallery = () => {
  const [uploads, setUploads] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  // Swipe state
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/uploads`)
      .then((res) => {
        setUploads(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load photos');
        setLoading(false);
      });
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % uploads.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + uploads.length) % uploads.length);
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > 50) nextSlide(); // swipe left
    if (distance < -50) prevSlide(); // swipe right

    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (loading) {
    return <div className="loading"></div>;
  }

  if (uploads.length === 0) {
    return <p>No photos uploaded yet.</p>;
  }

  return (
    <div className="carousel-container">
      <h2 className="gallery-title">Troop 423 Photo Gallery</h2>
      {error && <p className="gallery-error">{error}</p>}

   <div
  className="carousel"
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
  <button className="carousel-btn left" onClick={prevSlide}>❮</button>

  <div className="carousel-slide" style={{ height: "100%" }}>
    <img
      src={uploads[index].image_path}
      alt={uploads[index].caption}
      className="carousel-image"
    />
  </div>

  <button className="carousel-btn right" onClick={nextSlide}>❯</button>
</div>


      <p className="carousel-caption">{uploads[index].caption}</p>

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

export default PhotoGallery;
