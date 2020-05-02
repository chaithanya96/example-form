import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import FormComponent from "./Form/FormComponent";
import FormSubmit from "./FormSubmit/Formsubmit";
function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <FormComponent/>
        </Route>
        <Route path="/submit">
          <FormSubmit />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
