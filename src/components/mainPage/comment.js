import { useEffect, useState } from "react";
import axios from "axios";

export default function Comment({ post, user }) {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState();
  const [total, setTotal] = useState();
  const [loaded, setLoaded] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/comments/" + post._id, {
      username: user.username,
      comment: e.target.comment.value,
    });
    setTotal(total + 1);
    e.target.comment.value = "";
  };
  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(
        "api/comments/" + post._id + "?page=1&limit=2"
      );
      setComments(res.data.result);
      setTotal(res.data.total);
      setHasMore(res.data.hasMore);
    };
    getComments();
  }, [post._id]);

  const fetchMore = async () => {
    const res = await axios.get("api/comments/" + post._id + "?page=" + page);
    setLoaded((oldComment) => [...oldComment, ...res.data.result]);
    setHasMore(res.data.hasMore);
    setPage(page + 1);
  };
  const viewMore = () => {
    if (hasMore) {
      fetchMore();
    }
  };

  const viewLess = () => {
    setView(!view);
  };

  const [view, setView] = useState(false);

  return (
    <>
      <div className="view-comment">
        {total <= 2 ? (
          <>
            {comments.map((comment) => (
              <div className="comment-item" key={comment._id}>
                <b>{comments.username}</b>
                {comments.text}
              </div>
            ))}
          </>
        ) : (
          <>
            <span
              className="view-all"
              onClick={() => {
                viewMore();
                setView(!view);
              }}
            >
              view all {total} comments
            </span>
            {view && (
              <>
                {loaded.map((comment) => {
                  return (
                    <div className="comment-item" key={comment._id}>
                      <b>{comment.username}</b>
                      {comment.text}
                    </div>
                  );
                })}
                <span>
                  {hasMore ? (
                    <span className="loadmore" onClick={viewMore}>
                      more
                    </span>
                  ) : (
                    <span className="loadmore" onClick={viewLess}>
                      less
                    </span>
                  )}
                </span>
              </>
            )}
          </>
        )}
      </div>
      <div className="post-comment">
        <i className="far fa-smile"></i>
        <form action="Post" autoComplete="off" onSubmit={handleSubmit}>
          <input type="text" name="comment" placeholder="Add a comment..." />
          <button>Post</button>
        </form>
      </div>
    </>
  );
}
