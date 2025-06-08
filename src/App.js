import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import OurDestinations from "./OurDestinations";
import BookYourAdventure from "./BookYourAdventure";
import './App.css';

function App() {
  return (
  


<div>
    <Router>
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/aboutus" className="link">About Us</Link>
        <Link to="/ourdestinations" className="link">Our Destinations</Link>
        <Link to="/bookyouradventure" className="link">Book Your Adventure</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ourdestinations" element={<OurDestinations />} />
        <Route path="/bookyouradventure" element={<BookYourAdventure />} />
      </Routes>
    </Router>

    
    </div>
  

  
  );
}

export default App;
