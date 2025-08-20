import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PalindromeChecker from "./components/PalindromeChecker";
import CustomerSettlement from "./components/CustomerSettlement";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <Routes>
          <Route path="/" element={<PalindromeChecker />} />
          <Route path="/settlement" element={<CustomerSettlement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
