import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
        <address> Contact us at Craigvalent@gmail.com</address>
      <a href="https://www.instagram.com/troop423official/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          style={styles.icon}
        />
      </a>
      <a href="https://www.facebook.com/people/BSA-Scouting-America-Troop-423-Center-Twp-PA/61574848076399/#" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          style={styles.icon}
        />
      </a>
    </footer>
  );
};

const styles = {
  footer: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    backgroundColor: 'darkblue',
    gap: '1rem',
  },
  icon: {
    width: '32px',
    height: '32px',
    cursor: 'pointer',
  },
};

export default Footer;
