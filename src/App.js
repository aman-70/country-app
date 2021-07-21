import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
// import Dashboard from './components/Dashboard/Dashboard';
// import CountryDetails from './components/CountryDetails/CountryDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const CountryDetails = lazy(() => import("./components/CountryDetails/CountryDetails"));

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
