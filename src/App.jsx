// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Resources from "./components/Resources.jsx"; // Ensure this path and filename are correct
import ArticleDetail from "./components/ArticleDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <a id="top"></a> {/* Anchor for back-to-top */}
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Resources Routes */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:resourceId" element={<ArticleDetail />} />

          {/* Catch-all Route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
