import Navbar from "./navbar";
import Story from "./story";
import "./mainPage.css";
import Suggestions from "./suggestion";
import Comment from "./comment";
import { useDoubleTap } from "use-double-tap";
import { useState } from "react";
import BottomNav from "./bottomNav";

const MainPage = ({ hideSuggestions, isMobile }) => {
  // const isMobile = useMediaQuery("(max-width: 768px)");
  const [liked, setLiked] = useState(false);

  const bind = useDoubleTap((event) => {
    setLiked(!liked);
    setTimeout(() => setLiked(false), 800);
    clearTimeout();
  });
  return (
    <>
      <Navbar isMobile={isMobile} />
      {/* <Story /> */}
      <section className={hideSuggestions ? "small" : "desktop"}>
        <div className="left">
          <Story />

          <div className="posts">
            <div className="user-profile">
              <div className="user-profile-image">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="user"
                />
              </div>
              <div className="username">hellpo</div>
              <p className="three-dots">...</p>
            </div>
            <div className="post">
              <img
                src="https://images.unsplash.com/photo-1632478997798-720e5f10c235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                alt="post"
                {...bind}
              />
              {liked ? <i className="fas fa-heart"></i> : null}
            </div>
            <div className="comment-section">
              <Comment liked={liked} />
              {isMobile ? (
                <></>
              ) : (
                <div className="post-comment">
                  <i class="far fa-smile"></i>
                  <form action="Post">
                    <input type="text" placeholder="Add a comment..." />
                    <button>Post</button>
                  </form>
                </div>
              )}
            </div>
          </div>

          <div className="posts">
            <div className="user-profile">
              <div className="user-profile-image">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="user"
                />
              </div>
              <div className="username">hellpo</div>
              <p className="three-dots">...</p>
            </div>
            <div className="post">
              <img
                src="https://images.unsplash.com/photo-1632498764767-8d2ffe56d6ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                alt=""
                {...bind}
              />
              {liked ? <i className="fas fa-heart"></i> : null}
            </div>
            <div className="comment-section">
              <Comment liked={liked} />
              {isMobile ? (
                <></>
              ) : (
                <div className="post-comment">
                  <i class="far fa-smile"></i>
                  <form action="Post">
                    <input type="text" placeholder="Add a comment..." />
                    <button>Post</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="right">
          <Suggestions hideSuggestions={hideSuggestions} />
        </div>
      </section>

      {isMobile && <BottomNav />}
    </>
  );
};

export default MainPage;
