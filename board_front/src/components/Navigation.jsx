import React, { useState } from "react";
import { Link } from "react-router-dom";
console.log("sessionStorage=====", sessionStorage);
function Navigation() {
  const loginCheck = async (e) => {
    if (sessionStorage.length === 0) {
      e.preventDefault();
      console.log("sessionStorage=====", sessionStorage);
      alert("로그인 후 이용가능합니다.");
    }
  };

  return (
    <div>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/board" onClick={loginCheck}>
          Board
        </Link>
      </li>
    </div>
  );
}

export default Navigation;
