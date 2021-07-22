import './css/style.css';
// import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	// const [theme, setTheme] = useState(null);
	// const [darkOn, setDarkOn] = useState(false);
	
	// const clickHandler = () => {
	// 	if(darkOn === false) {
	// 		setDarkOn(true);
	// 	} else if(darkOn === true) {
	// 		setDarkOn(false);
	// 	}
	// }

	// useEffect(() => {
	// 	if(darkOn === false) {
	// 		setTheme('lightTheme');
	// 	} else if(darkOn === true) {
	// 		setTheme('darkTheme');
	// 	}
	// }, [darkOn]);

	let clickedClass = "clicked";
	const body = document.body;
	const lightTheme = "light";
	const darkTheme = "dark";
	let theme;

	if (localStorage) {
		theme = localStorage.getItem("theme");
	}
	
	if (theme === lightTheme || theme === darkTheme) {
		body.classList.add(theme);
	} else {
		body.classList.add(lightTheme);
	}

	const clickHandler = (e) => {
		if (theme === darkTheme) {
		  body.classList.replace(darkTheme, lightTheme);
		  e.target.classList.remove(clickedClass);
		  localStorage.setItem("theme", "light");
		  theme = lightTheme;
		} else {
		  body.classList.replace(lightTheme, darkTheme);
		  e.target.classList.add(clickedClass);
		  localStorage.setItem("theme", "dark");
		  theme = darkTheme;
		}
	  }

	return (
		<Router>
			{/* <main id="App" className={`App ${theme}`}> */}
			<main id="App" className={`App`}>
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
