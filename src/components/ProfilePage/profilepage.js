import Navbar from "../mainPage/navbar";
import "./profilepage.css";
import AllPosts from "./allPosts";
import useMediaQuery from "../mediaQuery.js";
import BigScreen from "./bigScreen/bigScreen";
import Userdet from "./smallScreen/userdet";
import BottomNav from "../mainPage/bottomNav";
import { useParams } from "react-router-dom";
const Profile = (props) => {
  const { userName } = useParams();
  const { isMobile } = props;
  const showSmall = useMediaQuery("(max-width: 735px)");
  const isMounted = () => {
    if (showSmall) {
      return <Userdet userName={userName} />;
    } else {
      return <BigScreen userName={userName} />;
    }
  };
  // }
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="profile-page">
        <div className="main-page">
          {isMounted()}
          <AllPosts userName={userName} />
        </div>
      </div>
      {isMobile && <BottomNav />}
    </>
  );
};

export default Profile;
