import Mobile from "../mobile/mobile";
import "./login.css";

import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";

const Login = () => {
  const CustomButtonRoot = styled("button")(`
  background-color: #007fff;
  width: 77%;
  height: 30px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

  function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }
  return (
    <>
      <div className="main">
        <div className="login_page">
          <Mobile />
          <div className="login_page_content">
            <div className="login_right">
              <div className="login_title">Instagram</div>
              <div className="login_content">
                <input
                  type="text"
                  name="usernmae"
                  id=""
                  placeholder="Phone number, username or email"
                />
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                />
                <div className="login_btn">
                  <CustomButton>Log In</CustomButton>
                </div>
                <div className="or">
                  <div className="line"></div>
                  <div className="o">OR</div>
                  <div className="line"></div>
                </div>
                <div className="fb">
                  <i class="fab fa-facebook-square"> </i>
                  <span> Log in with Facebook</span>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "12px",
                  }}
                >
                  Forgot password?
                </div>
              </div>
            </div>
            <div className="create">
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                Don't have an account?
                <a
                  href="#"
                  style={{
                    textDecoration: "none ",
                    color: "rgb(0, 132, 255)",
                  }}
                >
                  {" "}
                  Sign Up
                </a>
              </div>
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
      </div>
    </>
  );
};

export default Login;
