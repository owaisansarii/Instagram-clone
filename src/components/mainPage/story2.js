import React, { createRef, useEffect, useState } from "react";
import useSmoothScroll from "use-smooth-scroll";
import ChevronLeftTwoToneIcon from "@material-ui/icons/ChevronLeftTwoTone";
import ChevronRightTwoToneIcon from "@material-ui/icons/ChevronRightTwoTone";
import Story from "../Story/Index";
import axios from "../../utils/axios";
import GetHeaders from "../../utils/headers";

const Stories = ({ stories, isOpenStory, setIsOpenStory }) => {
  const scrollableDiv = createRef();
  const scrollTo = useSmoothScroll("x", scrollableDiv);
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  // const [storyData, setStoryData] = useState({});
  const [currentStoryIndex, setCurrentStoryIndex] = useState(-1);

  useEffect(() => {
    if (currentStoryIndex === -1 || !isOpenStory) {
      return;
    }
    setTimeout(() => {
      nextImage();
      console.log("next called");
    }, 3300);
  }, [currentStoryIndex]);

  const scrollLeft = () => {
    if (
      scrollableDiv.current.offsetWidth - currentScrollPos <
      0.5 * scrollableDiv.current.offsetWidth
    ) {
      let newPos = scrollableDiv.current.offsetWidth;
      scrollTo(newPos);
    } else {
      let newPos = currentScrollPos + 0.5 * scrollableDiv.current.offsetWidth;
      scrollTo(newPos);
      setCurrentScrollPos(newPos);
    }
  };

  const scrollRight = () => {
    if (currentScrollPos < 0.5 * scrollableDiv.current.offsetWidth) {
      let newPos = 0;
      scrollTo(newPos);
    } else {
      let newPos = currentScrollPos - 0.5 * scrollableDiv.current.offsetWidth;
      scrollTo(newPos);
      setCurrentScrollPos(newPos);
    }
  };

  let openStory = (story, index) => {
    setCurrentStoryIndex(index);
    setIsOpenStory(true);
  };

  let closeStory = () => {
    viewThisStory(currentStoryIndex);
    setIsOpenStory(false);
  };

  let prevImage = () => {
    viewThisStory(currentStoryIndex);
    if (currentStoryIndex - 1 > -1) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  let nextImage = () => {
    viewThisStory(currentStoryIndex);
    if (currentStoryIndex + 1 <= stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      setIsOpenStory(false);
    }
  };

  const viewThisStory = (index) => {
    let storyId = stories[index]._id;
    axios
      .get(`api/v1/post/viewStory/${storyId}`, { headers: GetHeaders() })
      .then((res) => {
        // console.log(res.data)
      });
  };

  let storyList = stories.map((story, index) => {
    // console.log(story)
    return (
      <div
        key={story._id}
        className="cursor-pointer  flex flex-col items-center ml-4 pt-3 pb-2"
      >
        <div onClick={() => openStory(story, index)}>
          <div
            className={`${
              story.seen
                ? "rounded-corners-gray-borders"
                : "rounded-corners-gradient-borders"
            } rounded-full`}
          >
            <img
              src={story.image}
              className="w-16 h-16 rounded-full border-2 border-white"
              alt="story img"
            />
          </div>
        </div>
        <div className="w-17 text-center text-sm text-gray-700 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {story.userId?.username}
        </div>
        {isOpenStory && (
          <Story
            story={stories[currentStoryIndex]}
            prevImage={prevImage}
            nextImage={nextImage}
            closeStory={closeStory}
          />
        )}
      </div>
    );
  });

  return (
    <div>
      {/* // isOpenStory ? <Story closeStory={closeStory}/> :  */}
      <div className="relative max-w-xl h-28 sm:mt-7">
        <div
          ref={scrollableDiv}
          className="stories max-w-xl bg-white border border-insta-border-gray h-28 flex flex-row overflow-auto"
        >
          {storyList}
        </div>
        {currentScrollPos !== 0 && (
          <div
            onClick={scrollRight}
            className="cursor-pointer text-xl shadow-md absolute outline-0 rounded-full left-4 top-10"
          >
            <ChevronLeftTwoToneIcon className="text-black rounded-full bg-white" />
          </div>
        )}
        {currentScrollPos < 576 && (
          <div
            onClick={scrollLeft}
            className="cursor-pointer text-xl shadow-md absolute rounded-full outline-0 right-4 top-10"
          >
            <ChevronRightTwoToneIcon className="text-black rounded-full bg-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;
