import './css/style.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	const [theme, setTheme] = useState('lightTheme');
	const [darkOn, setDarkOn] = useState(false);

	const clickHandler = () => {
		if(darkOn === false) {
			setDarkOn(true);
		} else if(darkOn === true) {
			setDarkOn(false);
		}
	}

	useEffect(() => {
		if(darkOn === false) {
			setTheme('lightTheme');
		} else if(darkOn === true) {
			setTheme('darkTheme');
		}
	}, [darkOn]);

	return (
		<Router>
			<main className={`App ${theme}`}>
				<div className="container">
					<Navbar clickHandler={clickHandler} theme={theme} />
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
