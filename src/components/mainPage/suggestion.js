import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
const Suggestions = ({ hideSuggestions }) => {
  const { user } = useContext(AuthContext);
  const noProfileImg =
    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
  if (!hideSuggestions) {
    return (
      <>
        <div className="right-top">
          <Link to={user.user.username}>
            <div className="user">
              <img src={user.user.profilePicture || noProfileImg} alt="img" />
            </div>
            <div className="user-det">
              <h4>{user.user.username}</h4>
              <div className="name">{user.user.fullname}</div>
            </div>
          </Link>
          <div className="switch">Switch</div>
        </div>
        <div className="suggestions">
          <div className="head">
            <div className="first-line">
              <h4> Suggestions for you</h4>
              <span className="s2">See All</span>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Suggestions;
