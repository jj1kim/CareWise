import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import AuthPage from "./routes/AuthPage"; // Auth 경로 통합 페이지
import CareSearchPage from "./routes/CareSearchPage";
import CareResultPage from "./routes/CareResultPage";
import UserPage from "./routes/UserPage.jsx"
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper" className="flex flex-col items-center">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/*" element={<AuthPage />} /> 
            <Route path="/care-search" element={<CareSearchPage />} />
            <Route path="/care-result" element={<CareResultPage />} />
            <Route path="/user" element={<UserPage />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
