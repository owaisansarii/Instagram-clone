import { useState, useEffect, useContext } from "react";
import "./bottomNav.css";
import { NavLink, useHistory } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { AuthContext } from "../../context/authContext";
// import Axios from "axios";
const BottomNav = (isMobile) => {
  const [homeActive, setHomeActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const { user } = useContext(AuthContext);

  const history = useHistory();
  useEffect(() => {
    if (window.location.pathname === "/") {
      setHomeActive(true);
    }
    if (window.location.pathname === `/${user.user.username}`) {
      setProfileActive(true);
    }
  }, [user.user.username]);

  const uploadImage = (files) => {
    history.push({
      pathname: "/create",
      state: {
        image: files[0],
      },
    });
    // history.push({
    //   pathname: "/create",
    //   state: formData,
    // });
  };

  return (
    <div className="bottom-nav">
      <NavLink to="/">
        {homeActive ? (
          <HomeIcon
            style={{
              transform: "scale(1.2)",
              color: "black",
              verticalAlign: "middle",
              textAlign: "center",
            }}
            // fontSize="medium"
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
      <i className="fas fa-search"></i>
      <div className="plus-icon">
        <label htmlFor="upload">
          <i className="fas fa-plus"></i>
          <input
            type="file"
            id="upload"
            style={{ display: "none " }}
            onChange={(e) => {
              uploadImage(e.target.files);
            }}
          />
        </label>
      </div>
      <i className="far fa-heart"></i>
      <NavLink to={`/${user.user.username}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
          alt=""
          style={{
            width: `${profileActive ? "18px" : "22px"}`,
            height: `${profileActive ? "18px" : "22px"}`,
            borderRadius: "50%",
            display: "block",
            position: "relative",
            border: "2px solid white",
            boxShadow: `${profileActive ? "0px 0px 0px 1px black" : " "}`,
          }}
          onClick={() => {
            setProfileActive(true);
          }}
        />
      </NavLink>
    </div>
  );
};
export default BottomNav;
