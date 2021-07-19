import './navbar-styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const clickHandler = () => {};

	return (
		<div className="Navbar">
			<div className="navbar-wrapper">
				<Link to="/" className="navbar-heading"><h2>Where in the world?</h2></Link>
				<div className="dark-mode">
					<span>
						<i class="fas fa-moon fa-md"></i>
					</span>
					<p onClick={clickHandler}>Dark mode</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
