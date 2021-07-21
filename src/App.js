import './css/style.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<main className="App">
				<div className="container">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/details/:id" component={CountryDetails} />
					</Switch>
				</div>
			</main>
		</Router>
	);
};

export default App;
