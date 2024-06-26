// import { useState } from "react";
import argentBankLogo from "./../../assets/img/argentBankLogo.webp";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  return (
    <header id="header">
      <nav className="main-nav">
        <a
          className="main-nav-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        {userData.isLogged ? (
          <div>
            <a
              className="main-nav-item"
              onClick={() => {
                navigate("/user");
              }}
            >
              <i className="fa fa-user-circle"></i>
              {userData.userinfo[0].userName}
            </a>
            <a href="./">Logout</a>
          </div>
        ) : (
          <div>
            <a className="main-nav-item" href="./sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
