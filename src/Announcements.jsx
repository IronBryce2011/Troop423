import React, { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
import './announcement.css';

function AnnouncementDisplay() {
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await axios.get('https://scout-backend-yuyg.onrender.com/api/announcement');
        setAnnouncement(res.data);
      } catch (err) {
        setError('Failed to load announcement');
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncement();
  }, []);

 
  if (error) return <p>{error}</p>;
  if (loading) return <div className="loading" ></div>

  return (
    <>
      <div className="announcement-single">
      <h2 className="announcement-title">Announcement</h2>
      <p className="announcement-content">{announcement.content}</p>
      <small className="announcement-date">Posted on: {new Date(announcement.created_at).toLocaleString()}</small>
    </div>
    </>
  );
};

export default AnnouncementDisplay;
