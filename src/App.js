import React, { Fragment, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Fragment />}>
        <Switch>
          <Route>
            <LoggedOutComponent />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

serviceWorker.register();

export default App;
