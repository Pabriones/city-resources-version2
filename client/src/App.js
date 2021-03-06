import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import EmergencyPage from './components/EmergencyPage';
import SearchDirectoryPage from './components/SearchDirectoryPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

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
			</Switch>
		</Router>
	);
}

export default App;
