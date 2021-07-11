import { useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Favorites from "./components/favourites";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

import Login from "./components/login";
import Navbar from "./components/navbar";
import SearchPage from "./components/search";
import SearchResult from "./components/searchResult";
import { GET_REQUESTS_SUCCESS, REQUEST_DB, USER_TOKEN } from "./redux/consts";

const isAuth = () => {
  const token = localStorage.getItem(USER_TOKEN);

  if (!token) return false;

  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() ? (
        <>
          <Navbar />
          <Component {...props} />
        </>
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

const IsAuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() ? (
        <Redirect
          to={{
            pathname: "/search",
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem(REQUEST_DB)) {
      localStorage.setItem(
        REQUEST_DB,
        JSON.stringify([
          {
            login: "roman",
            requests: [],
          },
        ])
      );
    }

    const userData = jwt.verify(localStorage.getItem(USER_TOKEN), "secretkey");

    dispatch({
      type: GET_REQUESTS_SUCCESS,
      data: JSON.parse(localStorage.getItem(REQUEST_DB)).filter(
        (value) => value.login === userData.login
      )[0],
    });
  }, []);

  return (
    <Router>
      <IsAuthRoute exact path="/" component={Login} />

      <Switch>
        <AuthRoute exact path="/search" component={SearchPage} />
        <AuthRoute exact path="/result" component={SearchResult} />
        <AuthRoute exact path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
