import { Link } from 'react-router-dom';

const Navbar = ({ clickHandler, theme }) => {
	return (
		<header className="Navbar">
			<div className="navbar-wrapper">
				<Link to="/" className="navbar-heading"><h2>Where in the world?</h2></Link>
				<div className="dark-mode" onClick={clickHandler}>
					<span>
						<i className="fas fa-moon fa-md"></i>
						<i className="fas fa-sun fa-lg"></i>
					</span>
					<p>{theme === "darkTheme" ? "Light" : "Dark"}</p>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
