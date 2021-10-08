import { useState, useEffect } from "react";
import "./comment.css";
import axios from "axios";
import Comment from "./comment";
import LikesModal from "../modals/likes";

const Postfooter = ({ post, user }) => {
  const [isliked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [isReadMore, setIsReadMore] = useState(false);
  const [descLength, setDescLength] = useState(114);

  const likeHandler = () => {
    setIsLiked(!isliked);
    setLikes(isliked ? likes.slice(0, likes.length - 1) : likes.concat(user));
    axios.put("api/posts/like/" + post._id, {
      userId: user._id,
    });
  };

  useEffect(() => {
    let done = true;
    const isLikedbyUser = () => {
      if (post.likes.length > 0) {
        post.likes.some((like) => {
          if (like === user.username) {
            setIsLiked(true);
            setLikes(post.likes);
            return true;
          }
          return false;
        });
      }
    };
    if (done) isLikedbyUser();
    return () => {
      done = false;
    };
  }, [post.likes, user]);

  return (
    <>
      <div className="comment-container">
        <div className="comment-header">
          <i
            className={` ${isliked ? "fas" : "far"} fa-heart`}
            onClick={likeHandler}
            style={{ color: isliked ? "red" : "black" }}
          ></i>
          <i className="far fa-comment"></i>
          <i className="far fa-paper-plane"></i>
        </div>
        <div className="like-count">
          <LikesModal likes={likes} />
        </div>
        {post.desc && (
          <div className="caption">
            <p>
              <b>{user.username}</b>&nbsp;
              {post.desc.substring(0, descLength)}
              {post.desc.length > descLength ? "..." : ""}
            </p>
            {post.desc.length > 0 && (
              <span
                className="read-more"
                onClick={() => {
                  setIsReadMore(!isReadMore);
                  setDescLength(isReadMore ? 114 : post.desc.length);
                }}
              >
                {post.desc.length >= descLength &&
                  (descLength > 114 ? "less" : "more")}
              </span>
            )}
          </div>
        )}

        <Comment post={post} user={user} />
      </div>
    </>
  );
};

export default Postfooter;
