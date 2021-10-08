import Postfooter from "./Postfooter";
import { useState, useEffect } from "react";
import { useDoubleTap } from "use-double-tap";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const noAvatar =
    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
  const [User, setUser] = useState({});
  const bind = useDoubleTap(() => {
    setLiked(!liked);
    setTimeout(() => setLiked(false), 800);
    clearTimeout();
  });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("api/users/" + post.userId);
      setUser(res.data);
    };
    fetchUser();
  }, [post]);

  return (
    <>
      <div className="user-profile">
        <div className="user-profile-image">
          <img src={User.profileImage || noAvatar} alt="user" />
        </div>
        <Link to={`/${User.username}`}>
          {" "}
          <div className="username">{User.username} </div>
        </Link>
        <p className="three-dots">...</p>
      </div>
      <div className="post">
        <img src={post.image} alt="post" {...bind} />
        {liked ? <i className="fas fa-heart"></i> : null}
      </div>
      <div className="comment-section">
        <Postfooter post={post} user={User} liked={liked} />
      </div>
    </>
  );
};

export default Post;
