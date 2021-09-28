import Login from "./components/LoginPage/login";
import Signup from "./components/LoginPage/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/mainPage/mainPage";
import { useState, useEffect } from "react";
import useMediaQuery from "./components/mediaQuery";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const hideSuggestions = useMediaQuery("(max-width: 1000px)");

  const isMobile = useMediaQuery("(max-width: 500px)");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? (
              <MainPage isMobile={isMobile} hideSuggestions={hideSuggestions} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )}
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
