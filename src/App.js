import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupSection from "./Authentication-components/SignupPage";
import LoginSection from "./Authentication-components/LoginPage";
import HomeSection from "./Authentication-components/HomePage";

import "./App.css"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/signup" component = {SignupSection}/>
      <Route exact path = "/login" component = {LoginSection}/>
      <Route exact path = "/" component = {HomeSection}/>
    </Switch>
  </BrowserRouter>
)

export default App;
