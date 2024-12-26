import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/title.png";
import alert from "../../assets/images/icons/alert.png";
import closet from "../../assets/images/icons/closet.png";
import profile from "../../assets/images/icons/profile.png";

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="w-full max-w-[1440px] mx-auto h-[85px]">
      <div className="fixed z-50 flex items-center justify-between w-full h-[85px] px-[109px] py-[22px] bg-white">
        <nav className="flex items-center gap-[30px]">
          <Link to="/">
            <p className="header-menu text-[17px]">HOME</p>
          </Link>
          <Link to="/care-search">
            <p className="header-menu text-[17px]">QnA 커뮤니티</p>
          </Link>
          <Link to="/label-ex">
            <p className="header-menu text-[17px]">세탁기호 분석</p>
          </Link>
          <Link to="/label-search">
            <p className="header-menu text-[17px]">세탁기호 찾기</p>
          </Link>
        </nav>
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img
            className="w-[168px] h-[40px] object-cover"
            alt="Element"
            src={logo}
          />
        </Link>

        {isAuthenticated ? (
          <nav className="flex items-center gap-[30px]">
            <p
              className="header-menu text-[17px] cursor-pointer"
              onClick={onLogout}
            >
              로그아웃
            </p>
            <Link to="/">
              <img className="h-[18px] object-cover" alt="Alert" src={alert} />
            </Link>
            <Link to="/">
              <img
                className="h-[18px] object-cover"
                alt="Closet"
                src={closet}
              />
            </Link>
            <Link to="/">
              <img
                className="h-[18px] object-cover"
                alt="Profile"
                src={profile}
              />
            </Link>
          </nav>
        ) : (
          <nav className="flex items-center gap-[30px]">
            <Link to="/auth/login">
              <p className="header-menu text-[17px]">로그인</p>
            </Link>
            <Link to="/auth/signup">
              <p className="header-menu text-[17px]">회원가입</p>
            </Link>
          </nav>
        )}
      </div>
      <div className="w-full h-[85px] bg-gray-200"></div>
    </header>
  );
};

export default Header;
