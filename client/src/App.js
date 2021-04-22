import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import ContactPage from "./components/ContactPage";
import EmergencyPage from "./components/EmergencyPage";
import SearchDirectoryPage from "./components/SearchDirectoryPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import AddResource from "./components/AddResource";
import Forms from "./components/Forms";
import Homepage from "./components/Homepage"
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/contact" component={ContactPage} />
        <Route path="/emergency" component={EmergencyPage} />
        <Route path="/directory" component={SearchDirectoryPage} />
        <Route path="/footer" component={Footer} />
        <Route path="/loginmodal" component={LoginModal} />
        <Route path="/registermodal" component={RegisterModal} />
        <Route path="/addresource" component={AddResource} />
        <Route path="/forms" component={Forms} />
    	<Route path="/homepage" component={Homepage} />
      <Route path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );

			
}

export default App;
