import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import FilterDashboard from './components/FilterDashboard/FilterDashboard';
import Navbar from './components/Navbar/Navbar';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className="App">
				<div className="container">
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/details/:id">
							<CountryDetails />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
