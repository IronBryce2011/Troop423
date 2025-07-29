import React, { useEffect, useState } from 'react';
const CalendarEmbed = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=1d66f7e90195fa90783a8727ebe02d9b9f6a5b3e332a0a3da86f1c43820ccb52%40group.calendar.google.com&ctz=America%2FNew_York"
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
