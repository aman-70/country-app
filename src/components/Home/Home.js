import './home-styles.css';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import CountryDetails from '../CountryDetails/CountryDetails';

const Home = () => {
	return (
		<div className="Home">
			<Navbar />
			<Dashboard />
			<CountryDetails />
		</div>
	);
};

export default Home;
