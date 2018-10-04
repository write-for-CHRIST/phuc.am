import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <div className="container">
            <ul className="menu">
              <li>Trang chủ</li>
              <li>Về chúng tôi</li>
              <li>Phúc âm là gì?</li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
