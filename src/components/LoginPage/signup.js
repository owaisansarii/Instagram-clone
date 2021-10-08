import { useContext, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import "./signup.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useHistory } from "react-router-dom";
const Signup = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isuniqueEmail, setIsuniqueEmail] = useState(true);
  const [isuniqueUsername, setIsuniqueUsername] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [emailLength, setEmailLength] = useState("");
  const [usernameLength, setUsernameLength] = useState("");
  const emailRef = useRef();
  const fullNameRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const fullName = fullNameRef.current.value;
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    setIsLoading(true);
    try {
      const res = await axios.post("/api/auth/signup", {
        email: email,
        fullname: fullName,
        username: userName,
        password: password,
      });
      if (res.status === 200) {
        history.push("/login");
        setIsLoading(false);
      } else {
        alert("Signup Failed");
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const checkDisabled = () => {
    if (
      emailRef.current.value === "" ||
      fullNameRef.current.value === "" ||
      userNameRef.current.value === "" ||
      passwordRef.current.value === ""
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const isEmailUnique = async (email) => {
    try {
      const res = await axios.post("/api/users/find/email", {
        email: email,
      });
      if (res.data.isUnique === false) {
        setIsuniqueEmail(false);
        setDisabled(true);
      } else {
        setIsuniqueEmail(true);
      }
    } catch (err) {
      console.log(err);
      setIsuniqueEmail(true);
    }
  };
  const isUsernameUnique = async (username) => {
    try {
      const res = await axios.post("/api/users/find/username", {
        username: username,
      });
      if (res.data.isUnique === false) {
        setIsuniqueUsername(false);
        setDisabled(true);
      } else {
        setIsuniqueUsername(true);
      }
    } catch (err) {
      console.log(err);
      setIsuniqueUsername(true);
    }
  };
  useEffect(() => {
    checkDisabled();
  }, []);

  return (
    <>
      {user ? (
        <div
          className="error"
          style={{
            textAlign: "center",
            color: "red",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          <h1>You are already logged in</h1>
        </div>
      ) : (
        <div className="signup-container">
          <div className="signup">
            <form action="" onSubmit={handleSubmit}>
              <div className="logo">Instagram</div>
              <p>Sign up to see photos and videos from your firends </p>
              <button>
                <i className="fab fa-facebook-square"> </i> Login with Facebook
              </button>
              <div className="or">
                <div className="line"></div>
                <div className="o">OR</div>
                <div className="line"></div>
              </div>
              <div
                className="checked"
                style={{
                  position: "relative",
                }}
              >
                <input
                  type="text"
                  value={email}
                  placeholder="Mobile Number or Email"
                  ref={emailRef}
                  onChange={(e) => {
                    checkDisabled();
                    setEmail(e.target.value);
                    isEmailUnique(e.target.value);
                    setEmailLength(e.target.value.length);
                  }}
                  required
                />
                {!isuniqueEmail ? (
                  <i
                    className="fas fa-exclamation-circle"
                    style={{
                      color: "red",
                      position: "absolute",
                      display: `${emailLength > 0 ? "block" : "none"}`,
                    }}
                  ></i>
                ) : (
                  <i
                    className="fas fa-check-circle"
                    style={{
                      color: "green",
                      position: "absolute",
                      display: `${emailLength > 0 ? "block" : "none"}`,
                    }}
                  ></i>
                )}
              </div>
              <input
                type="text"
                placeholder="Full Name"
                ref={fullNameRef}
                onChange={checkDisabled}
                required
              />
              <div
                className="checked"
                style={{
                  position: "relative",
                }}
              >
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  ref={userNameRef}
                  onChange={() => {
                    checkDisabled();
                    isUsernameUnique(userNameRef.current.value);
                    setUsername(userNameRef.current.value);
                    setUsernameLength(userNameRef.current.value.length);
                  }}
                  required
                />
                {!isuniqueUsername ? (
                  <i
                    className="fas fa-exclamation-circle"
                    style={{
                      color: "red",
                      position: "absolute",
                      display: `${usernameLength > 0 ? "block" : "none"}`,
                    }}
                  ></i>
                ) : (
                  <i
                    className="fas fa-check-circle"
                    style={{
                      color: "green",
                      position: "absolute",
                      display: `${usernameLength > 0 ? "block" : "none"}`,
                    }}
                  ></i>
                )}
              </div>
              <input
                type="password"
                name=""
                placeholder="Password"
                ref={passwordRef}
                onChange={checkDisabled}
                required
              />
              <button
                disabled={disabled}
                style={{
                  backgroundColor: disabled && "#ccc",
                  color: disabled && "white",
                }}
              >
                {isLoading ? (
                  <CircularProgress style={{ color: "#fff" }} size={20} />
                ) : (
                  "Sign up"
                )}
              </button>
              <div className="policy">
                By signing up, you agree to our Terms , Data Policy and Cookies
                Policy .
              </div>
            </form>
            <div className="box-2">
              Have an account? <Link to="/">Login</Link>
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
      )}
    </>
  );
};

export default Signup;
