import Login from "./components/LoginPage/login";
import Signup from "./components/LoginPage/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/mainPage/mainPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? (
              <MainPage />
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
