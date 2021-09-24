import Navbar from "./navbar";
import Story from "./story";
import "./mainPage.css";
const MainPage = () => {
  return (
    <>
      <Navbar />
      {/* <Story /> */}
      <section className="desktop ">
        <div className="left">
          <Story />
          <div className="posts">hello</div>
        </div>
        <div className="right">
          <div className="right-top">
            <div className="user">
              <img src="https://i.imgur.com/qQq3QZL.jpg" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
