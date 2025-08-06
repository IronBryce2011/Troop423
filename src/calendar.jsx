import React, { useEffect, useState } from 'react';
const CalendarEmbed = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=a2Rma3VndmRwb2F1bmNnbnNnMjd0MWUzN2E5OWF1N2lAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230b8043&color=%233f51b5"
      style={{ border: 0 }}
      width="800"
      height="600"
      frameBorder="0"
      scrolling="no"
      title="Google Calendar"
    ></iframe>
  );
};
function calendar() {
 
  return (
    <div className='wrapper'>
      <h2>Scouting Events Calendar</h2>
      <CalendarEmbed className="embed" />
    </div>
  );
}
export default calendar;
