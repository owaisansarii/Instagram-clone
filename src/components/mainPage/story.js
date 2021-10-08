import { useRef, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import "./story.css";
const Story = () => {
  const [touch, setTouch] = useState(false);
  const [start, setStart] = useState(false);
  const [storyEnd, setStoryEnd] = useState(false);
  const storyRef = useRef(null);
  const scrollLeft = () => {
    let storyStart = (storyRef.current.scrollLeft -= 300);
    if (storyStart <= 0) {
      setStart(true);
    }
    setStoryEnd(false);
  };
  const scrollRight = () => {
    let storyEnd = (storyRef.current.scrollLeft += 300);
    setStart(false);
    if (
      storyEnd >=
      storyRef.current.scrollWidth - storyRef.current.clientWidth
    ) {
      setStoryEnd(true);
    }
  };
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints;
  };
  useEffect(() => {
    if (isTouchDevice()) {
      setTouch(true);
    }
    if (storyRef.current.scrollLeft === 0) {
      setStart(true);
    }
  }, []);
  return (
    <>
      <div className="stories">
        {touch ? (
          <></>
        ) : (
          !start && (
            <div className="scroll-left">
              <div className="text" onClick={scrollLeft}>
                <i className="fas fa-chevron-circle-left"></i>
              </div>
            </div>
          )
        )}
        <Stack>
          <div className="story-accounts" ref={storyRef}>
            <div className="userprofile">
              <div className="story-account-image">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
                <div className="plus">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="story-account-username">khaby</div>
            </div>

            <div className="story-profile">
              <div className="story-account-image">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt=""
                />
              </div>
              <div className="story-account-username">
                lol2jkjkjjkjsdsdkjkj3
              </div>
            </div>
            <div className="story-profile">
              <div className="story-account-image">
                <img
                  src="https://images.unsplash.com/photo-1632342084542-e1639e7e646d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>
              <div className="story-account-username">
                lol23jhksdsdsdsdkjjkjk
              </div>
            </div>
            <div className="story-profile">
              <div className="sto">
                <Avatar
                  alt="Cindy Baker"
                  src="https://cdn.worldvectorlogo.com/logos/facebook-messenger-white.svg"
                  sx={{ width: 56, height: 56 }}
                  style={{
                    margin: "3px",
                    border: " 2px solid white",
                  }}
                />
              </div>
              <div className="story-account-username">khaby</div>
            </div>
            <div className="story-profile">
              <div className="sto">
                <Avatar
                  alt="Cindy Baker"
                  src="https://images.unsplash.com/photo-1632258521940-b29d7d2ae9f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=436&q=80"
                  sx={{ width: 56, height: 56 }}
                  style={{
                    margin: "3px",
                    border: " 2px solid white",
                  }}
                />
              </div>
              <div className="story-account-username">khaby</div>
            </div>
            <div className="story-profile">
              <div className="story-account-image">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>
              <div className="story-account-username">placeholder</div>
            </div>
            <div className="story-profile">
              <div className="story-account-image">
                <img
                  src="https://images.unsplash.com/photo-1632258521940-b29d7d2ae9f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=436&q=80"
                  alt=""
                />
              </div>
              <div className="story-account-username">
                lol23jhksdsdsdsdkjjkjk
              </div>
            </div>
            <div className="story-profile">
              <div className="story-account-image">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>
              <div className="story-account-username">placeholder</div>
            </div>
            <div className="story-profile">
              <div className="story-account-image">
                <img
                  src="https://images.unsplash.com/photo-1632258521940-b29d7d2ae9f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=436&q=80"
                  alt=""
                />
              </div>
              <div className="story-account-username">
                lol23jhksdsdsdsdkjjkjk
              </div>
            </div>
            <div className="story-profile">
              <div className="story-account-image">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>
              <div className="story-account-username">placeholder</div>
            </div>
            {/* <div className="right-scroll">&#62;</div> */}
            <div className="story-profile">
              <div className="story-account-image">
                <img
                  src="https://images.unsplash.com/photo-1632258521940-b29d7d2ae9f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=436&q=80"
                  alt=""
                />
              </div>
              <div className="story-account-username">
                lol23jhksdsdsdsdkjjkjk
              </div>
            </div>
            <div className="story-profile">
              <div className="story-account-image">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>
              <div className="story-account-username">placeholder</div>
            </div>
            <div className="story-profile">
              <div className="story-viewed">
                <img
                  src="https://images.unsplash.com/photo-1632258521940-b29d7d2ae9f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=436&q=80"
                  alt=""
                />
              </div>
              <div className="story-account-username">wasi</div>
            </div>
          </div>
        </Stack>
        {touch ? (
          <></>
        ) : (
          !storyEnd && (
            <div className="scroll-right" onClick={scrollRight}>
              <div className="text">
                <i className="fas fa-chevron-circle-right"></i>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Story;
