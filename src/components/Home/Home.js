import './home-styles.css';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {
	return (
		<div className="Home">
			<Navbar />
			<Dashboard />
		</div>
	);
};

export default Home;
