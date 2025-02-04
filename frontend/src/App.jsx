// import { useState } from 'react'
// import React from 'react'
// import './App.css'
// import Navbar from './components/Navbar'

// import AllCards from './components/AllCards'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Navbar/>
//       <AllCards/>
//     </>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllCards from "./components/AllCards";
import EngineCardDetails from "./components/EngineCardDetails";
import AccessCardDetails from "./components/AccessCardDetails";
import Navbar from "./components/Navbar";
import EngineCard from "./components/EngineCard";
import AddForm from "./components/AddForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import History from "./components/History";

const App = () => {
  const ScrollToSection = () => {
    const { hash } = useLocation();
  
    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);
  
    return null; // No UI, just handling scroll
  };

  return (
    <Router> {/* ✅ Wrap everything inside Router */}
      <Navbar />  {/* ✅ Navbar is now inside Router */}
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<AllCards />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;
