/**
 * Created By: Sahand Mahdavi
 * Email: shndmahdavi@gmail.com
 */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Parse from "parse";
import { ENV } from "./envionments";

import { useSelector, shallowEqual } from "react-redux";

import { Home } from "./components/app/home";
import { Login } from "./components/app/auth/login";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;

export function Routes() {
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );
  console.log(isAuthorized);
  return (
    <Router>
      <div className="App">
        <Switch>
          {isAuthorized ? (
            <Route path="/" exact component={Home}></Route>
          ) : (
            <Route path="/authenticate" exact component={Login}></Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}
