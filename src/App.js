import React from "react";
import "./App.css";
import Store from "./services/Store";
import { Route, Switch } from "react-router-dom";
import Recipes from "./components/Recipes";
import PaymentGateway from "./components/PaymentGateway";

function App() {
  return (
    <Store>
      <div>
        <Switch>
          <Route exact path="/recipe/:id" component={PaymentGateway} />
          <Route path="/" component={Recipes} />
        </Switch>
      </div>
    </Store>
  );
}

export default App;
