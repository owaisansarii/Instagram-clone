import { Link } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup">
          <form action="">
            <h1>Instagram</h1>
            <p>Sign up to see photos and videos from your firends </p>
            <button>
              <i className="fab fa-facebook-square"> </i> Login with Facebook
            </button>
            <div className="or">
              <div className="line"></div>
              <div className="o">OR</div>
              <div className="line"></div>
            </div>
            <input type="text" name="" placeholder="Mobile Number or Email" />
            <input type="text" name="" placeholder="Full Name" />
            <input type="text" name="" placeholder="Username" />
            <input type="password" name="" placeholder="Password" />
            <button>Sign up</button>

            <div className="policy">
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </div>
          </form>
          <div className="box-2">
            Have an account? <Link to="/login">Login</Link>
          </div>
          <div className="store">
            Get the app
            <div
              style={{
                marginTop: "10px",
              }}
            >
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt=""
                width="40%"
                style={{ margin: "5px" }}
              />
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt=""
                width="40%"
                style={{ margin: "5px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
