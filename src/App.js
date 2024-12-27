import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import AuthPage from "./routes/AuthPage"; // Auth 경로 통합 페이지
import CareSearchPage from "./routes/CareSearchPage";
import CareResultPage from "./routes/CareResultPage";
import UserPage from "./routes/UserPage.jsx";
import ClosetPage from "./routes/ClosetPage.jsx";
import "./App.css";

function App() {
  // 로그인 상태를 관리할 state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 페이지가 로드될 때 localStorage에서 로그인 상태를 확인
  useEffect(() => {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    if (storedAuthStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper" className="flex flex-col items-center">
          {/* Header에 로그인 상태와 로그아웃, 로그인 함수를 전달 */}
          <Header
            isAuthenticated={isAuthenticated}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/auth/*"
              element={<AuthPage onLogin={handleLogin} />} // AuthPage에 onLogin 전달
            />
            <Route path="/care-search" element={<CareSearchPage />} />
            <Route path="/care-result" element={<CareResultPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/closet" element={<ClosetPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
