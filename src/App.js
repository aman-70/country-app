import Dashboard from './components/Dashboard/Dashboard';
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
							<Dashboard />
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
