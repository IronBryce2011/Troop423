import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './gallery.css';
axios.defaults.withCredentials = true;
const BACKEND_URL = 'https://scout-backend-yuyg.onrender.com';

const Gallery = () => {
  const [uploads, setUploads] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  useEffect(() => {
    setLoading(true); // start loading
    axios.get(`${BACKEND_URL}/api/uploads`)
      .then(res => {
        setUploads(res.data);
        setLoading(false); // stop loading
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load uploads');
        setLoading(false); // stop loading even if there is an error
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>; // ✅ Show loading while fetching
  }

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Photos</h2>
      {error && <p className="gallery-error">{error}</p>}
      <div className="gallery-grid">
        {uploads.map(upload => (
          <div key={upload.id} className="gallery-card">
            <img
              src={upload.image_path}
              alt={upload.caption}
              className="gallery-image"
            />
            <p className="gallery-caption">{upload.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
