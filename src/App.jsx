import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './home';
import Calendar from './calendar';
import PhotoGallery from './photogallery';
import Footer from './footer';


function Photos() {
  return (
    <div className="wrapper">
      <h2>Troop Photos</h2>
      <PhotoGallery />
      <a className="AddLink" href="https://photos.app.goo.gl/VcthaRZn9NtU2kNx7" > Google Photos Album</a>
    </div>
  );
}
function App() {
  return (
    <>
      <div className="app-content">
        <Router>
          <nav className="navbar">
  <NavLink 
    to="/" 
    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
  >
    Home
  </NavLink>

  <NavLink 
    to="/calendar" 
    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
  >
    Calendar
  </NavLink>
   <NavLink 
    to="/photos" 
    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
  >
    Photos
  </NavLink>
</nav>

          <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;

