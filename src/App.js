import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Certificates from "./Pages/Certificate";
import Technologies from "./Pages/Technologies";
import SplashScreen from "./Components/SplashScreen";
import ProjectDetail from "./Pages/ProjectDetail";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificate" element={<Certificates />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
        <Analytics />
      </Router>
    </>
  );
}

export default App;
