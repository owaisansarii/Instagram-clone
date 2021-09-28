import { useState, useEffect, useRef } from "react";
import "./navbar.css";
import settings from "./settings-cog.png";
const Navbar = ({ isMobile }) => {
  const menu = useRef(null);
  const [searchIcon, setSearchIcon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    let handler = (event) => {
      if (isMobile) return;
      if (!menu.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menu, isMobile]);
  return (
    <>
      {isMobile ? (
        <nav>
          <div className="mobileView">
            <i
              class="fas fa-camera"
              style={{
                fontSize: "24px",
              }}
            ></i>

            <div className="logo-2">Instagram</div>
            <div
              style={{
                display: "flex",
                // alignItems: "center",
                justifyContent: "end",
              }}
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/messenger-2999859-2492725.png"
                alt=""
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  display: "block",
                }}
              />
            </div>
          </div>
        </nav>
      ) : (
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
                <li className="user-account" ref={menu}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                    alt=""
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      display: "block",
                      position: "relative",
                    }}
                    onClick={() => {
                      setShowMenu(!showMenu);
                    }}
                  />
                  {showMenu ? (
                    <div className="profile-menu">
                      <div className="triangle">
                        <div className="triangle-inner"></div>
                      </div>
                      <ul>
                        <li>
                          <i class="far fa-user-circle"></i>
                          Profile
                        </li>
                        <li>
                          <img
                            src={settings}
                            alt=""
                            style={{
                              width: "16px",
                            }}
                          />
                          Settings
                        </li>
                        <li>
                          <i class="fas fa-sign-out-alt"></i>
                          Logout
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
