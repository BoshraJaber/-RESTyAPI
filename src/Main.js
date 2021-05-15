import React from "react";
import { Route, Switch } from "react-router-dom";
import Help from "./Help";
import Home from "./Home";
import HistoryPage from "./HistoryPage";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/history" component={HistoryPage} />
        <Route exact path="/help" component={Help} />
        {/* <Route> <div>404 Page Not Found</div> </Route>  */}
      </Switch>
    </main>
  );
};

export default Main;
