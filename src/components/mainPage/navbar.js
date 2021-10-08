import { useState, useEffect, useRef, useContext } from "react";
import "./navbar.css";
import settings from "./settings-cog.png";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Navbar = ({ isMobile }) => {
  const menu = useRef(null);
  const [searchIcon, setSearchIcon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const { user } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setHomeActive(true);
    }
    if (window.location.pathname === `/${user.user.username}`) {
      setProfileActive(true);
    }
  }, [user]);
  useEffect(() => {
    let handler = (event) => {
      if (isMobile) return;
      if (!menu.current.contains(event.target)) {
        setShowMenu(false);
        if (window.location.pathname !== "/profile") {
          setProfileActive(false);
        }
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
              className="fas fa-camera"
              style={{
                fontSize: "24px",
              }}
            ></i>

            <div
              className="logo-2"
              style={{
                textAlign: "center",
                width: "100%",
              }}
            >
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  width: "100%",
                }}
              >
                Instagram
              </NavLink>
            </div>
            <div
              style={{
                display: "flex",
                // alignItems: "center",
                justifyContent: "end",
              }}
            >
              <img
                scr={
                  user.profilePicture ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
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
              <div className="logo-2">
                <NavLink
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                  }}
                >
                  Instagram
                </NavLink>
              </div>
              <div
                className="search"
                style={{
                  position: "relative",
                }}
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onFocus={() => {
                    setSearchIcon(!searchIcon);
                  }}
                  onBlur={() => {
                    setSearchIcon(!searchIcon);
                  }}
                  onChange={handleChange}
                  onBlurCapture={() => {
                    setSearchValue("");
                  }}
                ></input>
                {!searchIcon && (
                  <i
                    className="fas fa-search"
                    style={{
                      position: "absolute",
                      top: "8px",
                      left: "65px",
                      fontSize: "12px",
                      color: "#999",
                    }}
                  ></i>
                )}
                {searchValue.length > 0 ? (
                  <div
                    className="search-container"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      transform: "translate(-25%, 20%)",
                      width: "400px",
                      height: "200px",
                      zIndex: "2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <ul>
                      <li>{searchValue}</li>
                    </ul>
                  </div>
                ) : null}
              </div>

              <ul className="icons">
                {/* <HomeOutlinedIcon /> */}
                <li>
                  <NavLink
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {homeActive ? (
                      <HomeIcon
                        style={{
                          transform: "scale(1.1 )",
                          color: "black",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      />
                    ) : (
                      <HomeOutlinedIcon
                        style={{
                          transform: "scale(1.1 )",
                          color: "black",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      />
                    )}
                  </NavLink>
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
                    src={
                      user.profilePicture ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt=""
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      display: "block",
                      border: "2px solid white",
                      boxShadow: `${
                        profileActive ? "0px 0px 0px 1px black" : " "
                      }`,
                    }}
                    onClick={() => {
                      setShowMenu(!showMenu);
                      setProfileActive(!profileActive);
                    }}
                  />
                  {showMenu ? (
                    <div className="profile-menu">
                      <div className="triangle">
                        <div className="triangle-inner"></div>
                      </div>
                      <ul>
                        <NavLink
                          to={`/${user.user.username}`}
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          <li>
                            <i className="far fa-user-circle"></i>
                            Profile
                          </li>
                        </NavLink>
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
                          <i className="fas fa-sign-out-alt"></i>
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
