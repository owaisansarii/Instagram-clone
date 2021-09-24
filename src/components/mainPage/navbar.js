import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [searchIcon, setSearchIcon] = useState(false);
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo-2">Instagram</div>
          <div className="search">
            <input
              type="text"
              placeholder={searchIcon ? "  Search" : " 🔍 Search"}
              onFocus={() => {
                setSearchIcon(!searchIcon);
              }}
              onBlur={() => {
                setSearchIcon(!searchIcon);
              }}
            />
          </div>
          <ul className="icons">
            <li>
              <i className="fas fa-home"></i>
            </li>
            <li>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/messenger-2999859-2492725.png"
                alt=""
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  display: "block",
                }}
              />
            </li>
            <li>
              <i className="far fa-compass"></i>
            </li>
            <li>
              <i className="far fa-heart"></i>
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                alt=""
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  display: "block",
                }}
              />
            </li>
          </ul>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
