import Login from "./components/LoginPage/login";
import Signup from "./components/LoginPage/signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from "./components/mainPage/mainPage";
// import { useState, useEffect } from "react";
import useMediaQuery from "./components/mediaQuery";
import Profile from "./components/ProfilePage/profilepage";
import Create from "./components/Upload/create";
import Details from "./components/Upload/details";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";

function App() {
  const hideSuggestions = useMediaQuery("(max-width: 1000px)");

  const isMobile = useMediaQuery("(max-width: 500px)");

  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? (
              <MainPage isMobile={isMobile} hideSuggestions={hideSuggestions} />
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route exact path="/signup">
            {user ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route exact path="/:userName">
            {user ? <Profile isMobile={isMobile} /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/create/details">
            <Details />
          </Route>
          {/* default path */}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
