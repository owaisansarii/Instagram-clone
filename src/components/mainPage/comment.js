import { useState, useEffect } from "react";
import "./comment.css";
import LinesEllipsis from "react-lines-ellipsis";

const Comment = ({ liked }) => {
  const [like, setLike] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    setNumberOfLines(isReadMore ? 2 : 50);
  };
  const [numberOfLines, setNumberOfLines] = useState(2);
  useEffect(() => {
    liked && setLike(liked);
  }, [liked]);
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe aspernatur corrupti accusamus. Eum expedita inventore consequuntur accusantium, sed quas optio dolor asperiores dolore? Beatae eius accusantium fugiat veritatis dignissimos voluptatum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci laudantium praesentium molestias earum distinctio, repudiandae possimus ex, eum impedit hic voluptas modi vitae maxime pariatur reiciendis incidunt. Optio, tempora molestiae!";
  return (
    <>
      <div className="comment-container">
        <div className="comment-header">
          <i
            className={` ${like ? "fas" : "far"} fa-heart`}
            onClick={() => setLike(!like)}
            style={{ color: like ? "red" : "black" }}
          ></i>
          <i className="far fa-comment"></i>
          <i className="far fa-paper-plane"></i>
        </div>
        <div className="like-count">
          <span>400 likes</span>
        </div>
        <div className="caption">
          <span className="user-name">hellpo</span>

          <div className="caption-text">
            <LinesEllipsis
              text={text + "    "}
              maxLine={numberOfLines}
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "less" : "more"}
            </span>
          </div>
          <div className="view-comment">
            <span className="view-all">view all {text.length} comments</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
