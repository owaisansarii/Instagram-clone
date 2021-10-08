import { useEffect, useState } from "react";
import axios from "axios";
import "./allPosts.css";
import CircularProgress from "@mui/material/CircularProgress";

const PostComment = ({ postId }) => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`api/comments/${postId}`);
      setComments(result.data.total);
    };
    fetchData();
  }, [postId]);
  const [comments, setComments] = useState([]);
  return <span>{comments}</span>;
};

const AllPosts = ({ userName }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`api/posts/username/${userName}`);
      setPosts(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, [userName]);
  return (
    <>
      <div className="threr">
        {isLoading ? (
          <CircularProgress />
        ) : (
          posts.reverse().map((post) => (
            <div className="img-container" key={post._id}>
              <img src={post.image} alt="post"></img>
              <div className="middle">
                <div className="post-det">
                  <i className="fas fa-heart">
                    &nbsp;
                    <span>{post.likes.length}</span>
                  </i>
                  <i className="fas fa-comment">
                    &nbsp;
                    <PostComment postId={post._id} />
                  </i>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AllPosts;
