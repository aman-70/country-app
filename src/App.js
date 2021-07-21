import './css/style.css';
import { lazy, Suspense } from 'react';
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
					<Suspense fallback={<div>Loading now...</div>}>
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route path="/details/:id" component={CountryDetails} />
						</Switch>
					</Suspense>
				</div>
			</main>
		</Router>
	);
};

export default App;
