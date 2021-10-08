import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import CircularProgress from "@mui/material/CircularProgress";
import Suggestions from "./suggestion";
import Story from "./story";
import axios from "axios";
import Post from "./posts";

const MainPost = ({ hideSuggestions, isMobile }) => {
  const [postData, setPostData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    let done = true;
    const fetchData = async () => {
      const id = user.user._id;
      const res = await axios.get("api/posts/timeline/" + id);
      setPostData(res.data);
    };
    if (done) {
      fetchData();
    }
    return () => {
      done = false;
    };
  }, [user]);
  return (
    <>
      <section className={hideSuggestions ? "small" : "desktop"}>
        <div className="left">
          <Story />
          {postData ? (
            <>
              {postData.map((post) => (
                <div key={post._id} className="posts">
                  <Post
                    post={post}
                    hideSuggestions={hideSuggestions}
                    isMobile={isMobile}
                  />
                </div>
              ))}
            </>
          ) : (
            <div className="main-posts">
              <CircularProgress />
            </div>
          )}
        </div>
        <div className="right">
          <Suggestions hideSuggestions={hideSuggestions} />
        </div>
      </section>
    </>
  );
};

export default MainPost;
