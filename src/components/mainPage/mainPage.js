import Navbar from "./navbar";
import "./mainPage.css";
import MainPost from "./mainPosts";

import BottomNav from "./bottomNav";

const MainPage = ({ isMobile, hideSuggestions }) => {
  return (
    <>
      <Navbar isMobile={isMobile} />
      <MainPost hideSuggestions={hideSuggestions} />
      {isMobile && <BottomNav />}
    </>
  );
};

export default MainPage;
