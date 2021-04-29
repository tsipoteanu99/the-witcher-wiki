import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "components/common/AppLayout";
import Home from "pages/Home";
import Series from "pages/Series";
import Arme from "pages/Arme";
import Armuri from "pages/Armuri";
import Bestiar from "pages/Bestiar";
import Caractere from "pages/Caractere";
import Semne from "pages/Semne";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <AppLayout>
          <Route exact default path="/" component={Home} />
          {/* seriile the witcher */}
          <Route exact path="/series" component={Series} />

          {/* gameplay */}

          <Route exact path="/arme" component={Arme} />
          <Route exact path="/armuri" component={Armuri} />
          <Route exact path="/bestiar" component={Bestiar} />
          <Route exact path="/caractere" component={Caractere} />
          <Route exact path="/semne" component={Semne} />

          {/* lumea the witcher */}
        </AppLayout>
      </Switch>
    </Router>
  );
}

export default App;
